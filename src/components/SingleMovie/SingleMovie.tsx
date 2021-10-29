import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { MoviesContext } from '../../context/MoviesContext';
import './SingleMovie.css'
const SingleMovie = (props: any) => {
    const {match} = props
    const { idMovie } = match.params
    const [movie, setMovie] = useState<any>({})

    useEffect(() => {
        const getMovie = async () => {
            const apiURL = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=40934736fdf8735c5e2986d6be76139e&language=es-ES`
            const res: any = await axios.get(apiURL)
            setMovie(res.data)
        }
        getMovie()
    }, [idMovie])

    const [auth] = useContext(AuthContext)
    const [viewed, setViewed, favorites, setFavorites] = useContext(MoviesContext)
	useEffect(() => {
		localStorage.setItem('viewed', JSON.stringify(viewed))
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [viewed, favorites])


	const addViewed = () => {
		if(!auth) return alert('Primero tienes que iniciar sesión')
		setViewed([...viewed, movie])
	}

	const addFavorites = () => {
		if(!auth) return alert('Primero tienes que iniciar sesión')
		setFavorites([...favorites, movie])
	}
    return (
        <>
            <div className="container">
                <div className="SingleMovie">
                    <div className="SingleMovie__image">
                        <img className="SingleMovie__img"
                            src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt="movie.original_title"
                        />
                    </div>
                    <div className="SingleMovie__content">
                        <p className="SingleMovie__text">
                            Título: 
                            <span className="SingleMovie__bold">{movie.original_title}</span>
                        </p>
                        <p className="SingleMovie__text">
                            Resumen: 
                            <span className="SingleMovie__bold">{movie.overview}</span>
                        </p> 
                        <p className="SingleMovie__text">
                            Fecha de lanzamiento: 
                            <span className="SingleMovie__bold">{movie.release_date}</span>
                        </p>                        
                        <p className="SingleMovie__text">
                            Puntaje: 
                            <span className="SingleMovie__bold">{movie.vote_average}</span>
                        </p>

                        <div className="SingleMovie__events">
                            <button className="SingleMovie__button"
                                onClick={() => addViewed()}
                            >
                                <i className="fas fa-heart"></i>
                                <span className="SingleMovie__bold">Añadir a favoritos</span>
                            </button>
                            <button className="SingleMovie__button"
                                onClick={() => addFavorites()}
                            >
                                <i className="fas fa-eye"></i>
                                <span className="SingleMovie__bold">Marcar como vista</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleMovie;