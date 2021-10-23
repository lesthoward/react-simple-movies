import React from 'react';
import { Link } from 'react-router-dom'
import'./Header.css'
import TabBar from './TabBar';
const Header = () => {
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
                    <nav className="header__nav">
                        <Link to="lanzamientos" className="header__text header__link">
                            Próximos <span className="highlight-one">Lanzamientos</span>
                        </Link>
                        <Link to="recientes" className="header__text header__link">
                            Estrenos
                        </Link>
                        <Link to="populares" className="header__text header__link">
                            Lo más popular
                        </Link>
                    </nav>
                </div>
            </header>

            <TabBar/>
        </>
    );
};

export default Header;