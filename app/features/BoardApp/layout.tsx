import { UserProvider } from "@/app/components/contexts/UserContexts";
import Login from "./login/page";


export default function BoardAppLayout({children}: Readonly<{children: React.ReactNode;}>)
{
    return(
        <UserProvider>
            {children}
        </UserProvider>
    )
}