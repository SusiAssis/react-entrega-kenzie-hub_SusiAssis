
import React from 'react'
import { RoutesMain } from './routes/index'
import { Global } from './styles/GlobalStyle'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export const App = () =>{
  
  return (
    <>
    <Global />
    <RoutesMain />
    <ToastContainer
     position="top-right"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    </>
    
  )
}
export default App
