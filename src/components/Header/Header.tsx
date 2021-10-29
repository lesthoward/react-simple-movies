import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import'./Header.css'
import TabBar from './TabBar';

const Header = () => {
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
            <div className="existing-header"></div>
            <header>
                <div className="container">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="MoviesTV Logo" className="logo__img"/>
                        <h1 className="logo__text">Movies</h1>
                        <span className="logo-highlight">TV</span>
                    </Link>
                    {
                        auth
                        ? (
                            <nav className="header__nav">
                                {/* <Link to="lanzamientos" className="header__text header__link"> */}
                                    {/* Próximos <span className="highlight-one">Lanzamientos</span> */}
                                {/* </Link> */}
                                <Link to="/estrenos" className="header__text header__link">
                                    Estrenos
                                </Link>
                                <Link to="/populares" className="header__text header__link">
                                    Lo más popular
                                </Link>
                                <Link to="/profile" className="header__text header__link">
                                    Mi perfil
                                </Link>
                                <Link to="/" className="header__text header__link fas fa-door-open"
                                    onClick={login}
                                >
                                </Link>
                            </nav>
                        )
                        : (
                            <nav className="header__nav">
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
            </header>

            <TabBar/>
        </>
    );
};

export default Header;