import React, { createContext, useState } from "react";

interface MoviesContextProps {
    children: React.ReactChild
}

const MoviesContext = createContext<any[]>([])
const MoviesProvider: React.FC<MoviesContextProps> = ({children}) => {
    const initialState = (type: string): object[] => {
        const getLocalStorage: string = localStorage.getItem(type) || ''
        if(getLocalStorage === '') return []
        const movieArr: object[] = JSON.parse(getLocalStorage)
        return movieArr
    }
    const [view, setViewed] = useState<object[]>(initialState('viewed'))
    const [favorites, setFavorites] = useState<object[]>(initialState('favorites'))
    return (
        <MoviesContext.Provider value={[view, setViewed, favorites, setFavorites]}>
            {children}
        </MoviesContext.Provider>
    )
}

export {
    MoviesContext,
    MoviesProvider
}