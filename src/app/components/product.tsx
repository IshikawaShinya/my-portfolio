
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const navigation = {
    loginpage:{ href: './features/login' },
}

export default function Product(){
    const router = useRouter()
    return(
        <div>
            <button
            onClick={()=>router.push(navigation.loginpage.href)}
            >
                <Image src='/signin_picture.png' width='100' height='100' alt={''}/>
            </button>
        </div>

    )

}