
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import Button from "../button/Button";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logOut = () =>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
    return(
      <div className="navbar">
        <Button onClick={logOut} >Выйти</Button>
        <div className="navbar__items">
          <Link to="/posts">Посты</Link>
          <Link to="/about">О нас</Link>
        </div>
      </div>
    )
}

export default Navbar