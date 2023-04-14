
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { HeaderBnt } from "../../componentes/Header Bnt/Header Bnt"
import { StyledDashboard } from "../Dashboard/StyledDashboard"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const Dashboard = () => {
const [userData , setUserData] = useState({})
   
    const navigate = useNavigate()

    useEffect(()=>{
    const handleDashboard = async() => {
        const token = localStorage.getItem("@TOKEN")
        

        try{
            await api.get('/profile', {
                headers:{
                    Authorization:`Bearer ${JSON.parse(token)}`
                }
            }).then((response)=>{
                const user = (response.data)
                setUserData(user)
            })

        }catch (error){
            console.log(error)
        }
    }
    handleDashboard()
    },[])

    const logout = ()=>{
        localStorage.clear()
        return navigate('/')
    }
    
    return(
        <StyledDashboard>
        <HeaderBnt logout={logout} name='Sair'/>
        <main>
           <div className="contanier_data">
            <h2>Olá, {userData.name}</h2>
            <p>{userData.course_module}</p>
            </div>
            <div className="contanier_main">
                <h3>Que pena! Estamos em desenvolvimento :(</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
           
        </main>
        </StyledDashboard>
    )
}
export default Dashboard