
import { api } from "../../services/api"
import axios from "axios"

export const Dashboard = () => {
   
    const handleDashboard = async() => {
        const token = localStorage.getItem("@TOKEN")
        console.log(token)
        
        try{
            await api.get('/profile', token ).then((response)=>{
                console.log(response)
            })

        }catch (error){
            console.log(error)
        }
    }
    handleDashboard()
    
    return(
        <main>
            <div>
                <nav>
                    <div>
                        <h1>Kenzie Hub</h1>
                        <button>sair</button>
                    </div>

                    <div>
                        <h2>Olá,{'Samuel Leão'}</h2>
                        <p>{'Primeiro modulo'}</p>
                    </div>
                </nav>
            </div>
        </main>
    )
}
export default Dashboard