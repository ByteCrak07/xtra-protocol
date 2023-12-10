'use client'

import { FC, ReactNode, createContext, useState } from 'react';
import { useAccount } from 'wagmi'


interface AppContextType {
    user?: string;
}

const AppContext = createContext<AppContextType | null>(null);

const AppWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const { address, isConnecting, isDisconnected } = useAccount()
    // const

    return (
        <AppContext.Provider value={{
            user: address
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppWrapper }