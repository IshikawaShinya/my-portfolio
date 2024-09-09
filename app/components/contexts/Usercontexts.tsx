'use client'
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// 完成データ型
export interface User {
    id: number;
    username: string;
    email: string;
    profileImg: string;
    //セキュリティ上,passwordは持たない。
}

// 完成データ型のテストデータ
const testDataUser: User = {
    id:1,
    username: "test",
    email: "test@gmail.com",
    profileImg: "/shinya.jpg"
}

type stateUser = {
    stateUser : User | null,
    setUser : Dispatch<SetStateAction<User | null>>,
    logout: () => void
}

const teststateUser : stateUser = {
    stateUser : testDataUser,
    setUser : () => {},
    logout: () => {}
}

export const LoginUserContext = createContext<stateUser>(teststateUser);
//セッターを実装。https://qiita.com/charon1212/items/b8aabb09196fb8566b1c
//TODO:Userも一旦考えない
// export const LoginUserContext = createContext<User>(testDataUser);
//TODO:undefinedは一旦考えない
// export const LoginUserContext = createContext<User|undefined>(undefined);

export const UserProvider: React.FC <{children: ReactNode}> = ({children}) => {
    const [useUser, setuseUser] = useState<User | null>(testDataUser);
    
    const logout = () =>{
        setuseUser(null);
    };
    const propstate : stateUser = {
        stateUser : useUser,
        setUser : setuseUser,
        logout : logout,
    };
    return(
        <LoginUserContext.Provider value = {propstate}>
            {children}
        </LoginUserContext.Provider>
    );
}
