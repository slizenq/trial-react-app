import React, { useContext } from "react";
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import { AuthContext } from "../components/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true' )
    }
    return(   

        <div className="">
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин"/>
                <Input type="password" placeholder="Введите пароль"/>
                <Button>Войти</Button>
            </form>
        </div>
    )
}

export default Login;