'use client'
import HeaderBoardApp from "@/app/components/BoardApp/HeaderBoardApp";
import BackgroundImage from "@/app/components/common/BackgroundImage";
import Header from "@/app/components/common/Header";
import ManageForm from "@/app/components/common/ManageForm";
import { UserProvider, LoginUserContext } from "@/app/components/contexts/UserContexts";

export default function HomeBoardApp(){
    return(
        <div className="flex flex-col bg-white h-screen w-full">
            <HeaderBoardApp/>
            <BackgroundImage />
            <ManageForm/>
        </div>
    )
}
