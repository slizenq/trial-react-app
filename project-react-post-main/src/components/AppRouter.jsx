import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "./context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }
    return(
        isAuth
        ? <Routes>
        {privateRoutes.map(route =>
            <Route
                element={route.commponent}
                path={route.path}
                key={route.path}
            />
            )}
      <Route path="*" element={<Navigate to="/login" replace />}/>
    </Routes>
    : <Routes>
        {publicRoutes.map(route =>
        <Route
            element={route.commponent}
            path={route.path}
            key={route.path}
        />
        )}
        <Route path="*" element={<Navigate to="/login" replace />}/>
    </Routes>
   
    )
}

export default AppRouter