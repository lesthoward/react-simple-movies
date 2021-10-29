import React, { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import Movie from '../Movie/Movie';
import './Profile.css'
const Profile = () => {
    const [viewed,,favorites] = useContext(MoviesContext)
    console.log('file: Profile.tsx ~ line 7 ~ Profile ~ favorites', favorites)
    return (
        <>
            <div className="container">
                <div className="profile">
                    <h2 className="profile__title">Películas vistas</h2>
                    <div className="profile__wrapper grid">
                        {   
                            viewed.length
                            ? viewed.map((movie: any) => (
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))  
                            : <p>Sin contenido</p>  
                        }
                    </div>
                </div>
                <div className="profile">
                    <h2 className="profile__title">Favoritos</h2>
                    <div className="profile__wrapper grid">
                        {
                            favorites.length
                            ? favorites.map((movie: any) => (
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))    
                            : <p>Sin contenido</p>  
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;