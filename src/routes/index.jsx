import { Routes , Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'
import { Register } from '../pages/Register/index'
import { Dashboard } from '../pages/Dashboard/index'
import { TechProvider } from '../providers/TechContext'


export const RoutesMain = () => {
    return(
      
        
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
        <TechProvider>
        <Dashboard/>
        </TechProvider>
        }/>
        </Routes>
       
      
    )
}