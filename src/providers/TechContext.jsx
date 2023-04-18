import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext"
import { api } from "../services/api";


export const TechContext = createContext({})

export const TechProvider = ({children})=>{
const { user , setUser } = useContext(UserContext)
const token = localStorage.getItem("@TOKEN")
const listTechs = user.techs

console.log(listTechs)

const addTech = async (data)=>{
    console.log(data)
    try {
        const response = await api.post(`/users/techs`, data , {
            headers:{
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        console.log(response.data)
       
        setUser([...listTechs, (response.data)])
        

    } catch (error) {
        console.log(error)
    }
}


const removeTech = async (techId) =>{
    try {
        const response = await api.delete(`/users/techs/${techId}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    const newListTech = listTechs.filter(tech => tech.id !== techId)
    setUser(newListTech)

    } catch (error) {
        console.log(error)
    }
}




return(
    <TechContext.Provider value={{addTech , removeTech }}>
        {children}
    </TechContext.Provider>
)
}