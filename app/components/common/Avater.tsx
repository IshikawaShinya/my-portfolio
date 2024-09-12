import Image from 'next/image'
import AvaterImage from "@/public/shinya.jpg"
import { User } from '../contexts/UserContexts'
import NoUserImage from "@/public/gray.jpg"

type IProps = {
    user: User | null 
}

export default function Avater(props : IProps){

    return (
        <div className="flex -space-x-2 overflow-hidden">
            <Image
            alt = ""
            src = {props.user?.profileImg ?? NoUserImage} 
            width={30}
            height={30}
            className = "inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
        </div>
    )
    }
