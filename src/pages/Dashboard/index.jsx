
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { HeaderBnt } from "../../componentes/Header Bnt/Header Bnt"
import { StyledDashboard } from "../Dashboard/StyledDashboard"

export const Dashboard = () => {
    const [userData , setUserData] = useState({})
    console.log(userData)
   
    useEffect(()=>{
    const handleDashboard = async() => {
        const token = localStorage.getItem("@TOKEN")
        console.log(token)

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
    
    return(
        <StyledDashboard>
        <HeaderBnt name='Sair'/>
        <main>
           <div className="contanier_data">
            <h2>Olá, {userData.name}</h2>
            <p>{userData.course_module}</p>
            </div>
           
        </main>
        </StyledDashboard>
    )
}
export default Dashboard