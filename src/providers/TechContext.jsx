import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext"
import { api } from "../services/api";


export const TechContext = createContext({})

export const TechProvider = ({children})=>{
const { user , setUser , setListTechs , listTechs} = useContext(UserContext)
const [ techSelecionada , setTechSelecionada ] = useState({})
const token = localStorage.getItem("@TOKEN")

//const listTechs = user.techs

//console.log(listTechs)

const getTechs = async()=>{
    const responseTechs = await api.get(`/profile`, {
        headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    } )
         setListTechs(responseTechs.data.techs)
}

const addTech = async (data)=>{
   // console.log(data)
    try {
        const response = await api.post(`/users/techs`, data , {
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
       // console.log(response.data)
       
       setListTechs([...listTechs, (response.data)])
        //console.log(user)

    } catch (error) {
        console.log(error)
    }
}


const removeTech = async () =>{
    
     try {
        const response = await api.delete(`/users/techs/${techSelecionada.id}`, {
             headers:{
                 Authorization: `Bearer ${JSON.parse(token)}`
             }
         })
    getTechs()

    } catch (error) {
        console.log(error)
     }
}

const editTech = async (data) =>{
    const newTech = {...techSelecionada , ...data}
try {
    const response = await api.put(`/users/techs/${newTech.id}`, newTech , {
        headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
        }
 })
 getTechs()
    
} catch (error) {
    console.log(error)
}
}


return(
    <TechContext.Provider value={{addTech , removeTech , listTechs , editTech , setTechSelecionada , techSelecionada}}>
        {children}
    </TechContext.Provider>
)
}