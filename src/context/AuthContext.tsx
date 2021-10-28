import React, { createContext, useState } from "react";

interface AuthProps {
    children: React.ReactChild
}

const AuthContext = createContext<any[]>([])
const AuthProvider: React.FC<AuthProps> = ({children}) => {
    const [auth, setAuth] = useState<boolean>(false)
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}