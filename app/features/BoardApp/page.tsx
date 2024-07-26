'use Client'
import Login from "./login/page"
import React from "react"
// TODO:React routerを理解
// import { UserProvider } from "@/app/components/contexts/Usercontexts"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

export default function BoardApp(){
    return(
        // 前バージョン
        <div className="bg-white">
            <Login />
        </div>
        // userContext追加バージョン
        // <UserProvider>
        //     <div className="bg-white">
        //         <Login />
        //     </div>
        // </UserProvider>
        // TODO:React routerを理解
        // <UserProvider>
        //     <Router>
        //         <Routes>
        //             <div className="bg-white">
        //                 <Login />
        //             </div>
        //             {/* <Route path = '/app/features/BoardApp/login' element={<Login/>}/> */}
        //         </Routes>
        //     </Router>
        // </UserProvider>
    )
}
