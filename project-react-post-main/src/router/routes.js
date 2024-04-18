import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: "/about", commponent: <About/>},
    {path: "/posts", commponent: <Posts/>},
    {path: "/posts/:id", commponent: <PostIdPage/>}
]

export const publicRoutes = [
    {path: "/login", commponent: <Login/>}
]