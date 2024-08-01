'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

const testDataUser: User = {
    id:1,
    username: "test",
    email: "test@gmail.com",
    password: "test"
}

export const userContext = createContext<number>(0);
//TODO:Userも一旦考えない
// export const userContext = createContext<User>(testDataUser);
//TODO:undefinedは一旦考えない
// export const userContext = createContext<User|undefined>(undefined);

export const UserProvider: React.FC <{children: ReactNode}> = ({children}) => {
    return(
        <userContext.Provider value = {1}>
            {children}
        </userContext.Provider>
    )
}

// interface UserContextProps {
//     user: User | null;
//     login: (userData: User) => void; //なぜプロパティではなく関数にするのか？
//     logout: () => void;   
// }

// const UserContext = createContext<UserContextProps | undefined>(undefined); //?

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);

//     const login = (userData: User) => {
//         setUser(userData);
//     };

//     const logout = () => {
//         setUser(null);
//     };

//     return (
//         <UserContext.Provider value={{ user, login, logout }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (context === undefined) {
//         throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
// };
