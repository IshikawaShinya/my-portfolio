'use client'
import ManageForm from "@/app/components/common/ManageForm";
import { UserProvider, userContext } from "@/app/components/contexts/Usercontexts";

export default function HomeBoardApp(){
    return(
        <UserProvider>
            <div className="bg-white">
                <ManageForm/>
            </div>
        </UserProvider>
    )
}
