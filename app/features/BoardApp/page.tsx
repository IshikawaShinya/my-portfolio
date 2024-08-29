'use client'
import Login from "./login/page"
import React from "react"
import { UserProvider } from "@/app/components/contexts/UserContexts"
import { HomeIcon } from "@heroicons/react/24/outline"
import HomeBoardApp from "./BoardApp-Home/page"

export default function BoardApp(){
    return(
            <div className="bg-white">
                <Login />
            </div>
    )
}
