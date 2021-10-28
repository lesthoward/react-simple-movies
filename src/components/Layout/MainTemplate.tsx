import React, { useContext, useEffect } from 'react';
import { Route} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';

const MainTemplate = () => {
    const [, setAuth] = useContext(AuthContext)
    useEffect(() => {
        const getLogin = () => {
            const myLogin = localStorage.getItem('myLogin')
            if(myLogin) {
                const statusLogin = myLogin === 'true' ? true : false
                setAuth(statusLogin)
            } 
        }
        getLogin()
    },[setAuth])
    return (
        <>
            <Header/>
            <main>
                    <Route path="/" component={Homepage}/>
            </main>
        </>
    );
};

export default MainTemplate;