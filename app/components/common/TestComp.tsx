'use client'
import { useUser } from "@/app/components/contexts/UserContexts";
import { User } from "@/app/components/contexts/UserContexts";


function test(user:User | null){
    console.log(user)
};


export default function TestComp(){
    const {user} = useUser();
    return(
        <div className="bg-black">
            <button 
            className = "text-white"
            onClick={() => (test(user))}>
                test
            </button>          
        </div>
    )
}
