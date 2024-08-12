'use client'
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
 

// 完成データ型
export interface User {
    id: number;
    username: string;
    email: string;
    //セキュリティ上,passwordは持たない。
}

// 完成データ型のテストデータ
const testDataUser: User = {
    id:1,
    username: "test",
    email: "test@gmail.com",
}

type stateUser = {
    stateUser : User,
    setUser : Dispatch<SetStateAction<User>> 
}

// const testUser : number = 1

const teststateUser : stateUser = {
    stateUser : testDataUser,
    setUser : () => {}
}

export const userContext = createContext<stateUser>(teststateUser);
//セッターを実装。https://qiita.com/charon1212/items/b8aabb09196fb8566b1c
//TODO:Userも一旦考えない
// export const userContext = createContext<User>(testDataUser);
//TODO:undefinedは一旦考えない
// export const userContext = createContext<User|undefined>(undefined);

export const UserProvider: React.FC <{children: ReactNode}> = ({children}) => {
    const [useUser, setuseUser] = useState<User>(testDataUser)
    const propstate : stateUser = {
        stateUser : useUser,
        setUser : setuseUser
    }
    return(
        <userContext.Provider value = {propstate}>
            {children}
        </userContext.Provider>
    )
}
