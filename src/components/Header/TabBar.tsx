import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import'./TabBar.css'
const TabBar = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const login = () => {
        if(!auth) {
            setAuth(true)
            localStorage.setItem('myLogin', 'true')
        } else {
            setAuth(false)
            localStorage.setItem('myLogin', 'false')
        }
    }
    return (
        <>
            <div className="tabBar">
                {
                    auth 
                    ? (
                        <nav className="tabBar__nav">
                            <Link to="/estrenos" className="header__text tabBar__link tabBar__text">
                                Estrenos
                            </Link>
                            <Link to="/populares" className="header__text tabBar__link tabBar__text">
                                Lo más popular
                            </Link>
                            <Link to="/profile" className="header__text tabBar__link tabBar__text">
                                Mi perfil
                            </Link>
                            <Link to="" className="header__text tabBar__link fas fa-door-open"
                                onClick={login}
                            ></Link>
                        </nav>
                    ) : (
                        <nav className="tabBar__nav tabBar__nav--full">
                            <div className="header__text header__link cursor"
                                onClick={login}
                            >
                                <i className="fas fa-lock highlight-one"></i>
                                Desbloquee para continuar
                            </div>
                        </nav>
                    )
                }
            </div>
        </>
    );
};

export default TabBar;