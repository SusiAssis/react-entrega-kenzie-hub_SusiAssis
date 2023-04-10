import { Routes , Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'
import { Register } from '../pages/Register/index'
import { Dashboard } from '../pages/dashboard/index'

export const RoutesMain = () => {
    return(
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    )
}