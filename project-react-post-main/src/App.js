import React, { useEffect, useState } from "react";
import './style/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoading(false)
  },[])
  return(
    <AuthContext.Provider value={{isAuth,setIsAuth, isLoading}}>
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
    </AuthContext.Provider>
  )
}

export default App;
