'use client'
import Login from "./login/page"
import React from "react"
import { UserProvider } from "@/app/components/contexts/Usercontexts"
// TODO:React routerを理解


export default function BoardApp(){
    return(
        <UserProvider>
            <div className="bg-white">
                <Login />
            </div>
        </UserProvider>
    )
}
