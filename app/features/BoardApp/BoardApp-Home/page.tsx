'use client'
import HeaderBoardApp from "@/app/components/BoardApp/HeaderBoardApp";
import ManageForm from "@/app/components/common/ManageForm";
import { UserProvider, userContext } from "@/app/components/contexts/Usercontexts";

export default function HomeBoardApp(){
    return(
            <div className="flex flex-col bg-white h-screen w-full">
                <HeaderBoardApp/>
                <ManageForm/>
            </div>
    )
}
