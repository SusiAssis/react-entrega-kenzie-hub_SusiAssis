import { createContext , useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async(data) => {
        try{
            const response = await api.post('/sessions' , data)

                setUser((response.data.user))

                localStorage.setItem("@TOKEN", JSON.stringify(response.data.token))

                localStorage.setItem("@USERID", JSON.stringify(response.data.user.id))

                navigate('/dashboard')
                toast.success('Login realizado com sucesso!')

        }catch (error){
            toast.error(error.response.data.message)
        }
    }

    const handleRegister = async (data) => {
        try{
           
            await api.post('/users' , data)
            navigate('/')
            toast.success('Conta criada com sucesso!')
    
        }catch (error){
            toast.error(error.response.data.message)
        }
    }
     

    return(
        <UserContext.Provider value={{handleLogin ,  handleRegister}}>
            {children}
        </UserContext.Provider>
    )
}