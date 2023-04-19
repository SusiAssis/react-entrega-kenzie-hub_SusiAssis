import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading , setLoading] = useState(true)
    const [ listTechs , setListTechs ] = useState([]) 
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN")
        const userAutoLogin = async () => {
              try {
              await api.get("/profile" , {
                  headers:{
                      Authorization:`Bearer ${JSON.parse(token)}`
                  }
               }).then((response)=>{
                   const userData = (response.data)
                   setUser(userData)
                   setListTechs(response.data.techs)
                   navigate("/dashboard")
               })
              } catch (error) {
               console.log(error)
              } finally {
                setLoading(false)
              } 
        }

        if(token){
            userAutoLogin()
        }

        }, [])

    const handleLogin = async (data) => {
        try {
            const response = await api.post("/sessions", data)

            localStorage.setItem("@TOKEN", JSON.stringify(response.data.token))

            localStorage.setItem("@USERID", JSON.stringify(response.data.user.id))

            setUser((response.data.user))
            setListTechs(response.data.user.techs)
            navigate("/dashboard")
            toast.success("Login realizado com sucesso!")
            setLoading(false)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleRegister = async (data) => {
        try {

            await api.post("/users", data)
            navigate("/")
            toast.success("Conta criada com sucesso!")

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const logout = () => {
        localStorage.clear()
        return navigate('/')
    }

    return (
        <UserContext.Provider value={{ handleLogin, handleRegister, user, setUser, logout , loading , listTechs , setListTechs}}>
            {children}
        </UserContext.Provider>
    )
}