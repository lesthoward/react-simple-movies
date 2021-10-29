import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { MoviesContext } from '../../context/MoviesContext';
import './Movie.css'
const Movie = (props) => {
    const { movie } = props
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
			<li className="movie">
				<div className="movie__image">
					<img
						src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
						alt={movie.title}
						className="movie__img"
					/>
				</div>
				<div className="movie__info">
					<Link to={`/movie/${movie.id}`} className="movie__text">{movie.title}</Link>
					<div className="movie__content">
						<span className="score">Puntaje: {movie.vote_average}</span>
						<div className="buttons">
							<div className="button buttons__viewed"
								onClick={() => addViewed()}
							>
								Marcar visto
							</div>
							<div className="button buttons__whitelist"
								onClick={() => addFavorites()}
							>
								Favoritos
							</div>
						</div>
					</div>
				</div>
			</li>
		</>
	);
};

export default Movie;
