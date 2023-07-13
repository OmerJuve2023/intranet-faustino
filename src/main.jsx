import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./page/LoginForm.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <LoginPage/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
