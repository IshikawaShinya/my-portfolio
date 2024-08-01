'use client'
import Login from "./login/page"
import React from "react"
import { useContext } from "react"
import { userContext } from "@/app/components/contexts/Usercontexts"
import { UserProvider } from "@/app/components/contexts/Usercontexts"
// TODO:React routerを理解
// import { UserProvider } from "@/app/components/contexts/Usercontexts"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



export default function BoardApp(){
    return(

        <UserProvider>
            <div className="bg-white">
                <Login />
            </div>
        </UserProvider>
    )
}
