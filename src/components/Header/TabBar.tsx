import React from 'react';
import { Link } from 'react-router-dom';
import'./TabBar.css'
const TabBar = () => {
    return (
        <>
            <div className="tabBar">
                <nav className="tabBar__nav">
                    <Link to="lanzamientos" className="header__text tabBar__link tabBar__text">
                        Próximos Lanzamientos
                    </Link>
                    <Link to="recientes" className="header__text tabBar__link tabBar__text">
                        Estrenos
                    </Link>
                    <Link to="perfil" className="header__text tabBar__link tabBar__text">
                        Mi perfil
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default TabBar;