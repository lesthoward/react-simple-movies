import React, { useEffect, useState } from 'react';
import './MovieSlider.css'
import axios from 'axios'
// import './Slider'
const MovieSlider = () => {
    const [movies, setMovies] = useState<any>({})
    const [load, setLoad] = useState(false)
    const [slider, setSlider] = useState<Slider>()
    useEffect(() => {
        const getPopularMovies = async () => {
            const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=40934736fdf8735c5e2986d6be76139e&language=es-ES&page=1'
            const res: any = await axios.get(apiURL)
            setMovies(res.data)
            setLoad(true)
        }

        getPopularMovies()
        if(load) {
            setSlider(new Slider())
        }
        // eslint-disable-next-line
    }, [load])

    class Slider {
        moviesLength: number
        movieWidth: number
        movieMargin: number
        status: string
        cursor: number
        translateX: number
        eachTime: number
        interval: any
        constructor() {
            this.moviesLength = movies.results.length
            this.movieWidth = 0
            this.movieMargin = 0
            this.status = 'running'
            this.cursor = 0
            this.translateX = 0
            this.eachTime = 3000
            this.interval = 0
            this.firstSteps()
            this.gettingMoving()
        }
        firstSteps() {
            const movie: any = document.querySelector('.movie');
            this.movieWidth = movie?.clientWidth + this.movieMargin

            const moviesWrapper: any = document.querySelector('.movies__wrapper');
            const moviesChildren: any = [...moviesWrapper.children]
            moviesChildren.map((movie: any) => moviesWrapper.appendChild(movie.cloneNode(true)))
        }
        gettingMoving() {
            
        }
        moveNext() {
            const moviesWrapper: any = document.querySelector('.movies__wrapper');
            this.cursor++
            this.translateX = this.movieWidth * this.cursor
            if(this.cursor > this.moviesLength) {
                moviesWrapper.style.transition = 'none'
                moviesWrapper.style.transform = `translateX(0px)`
                this.cursor = 0
                this.translateX = 0
                setTimeout(() => {
                    this.moveNext()
                }, 25);
                return
            } else {
                moviesWrapper.style.transition = 'all .3s ease'
                moviesWrapper.style.transform = `translateX(-${this.translateX}px)`
            }
        }
    }

    
    return (
        <>
            <div className="movies">
                <ul 
                    className="movies__wrapper"
                    onClick={() => {slider?.moveNext()}}
                >
                    {
                        movies?.results
                        ? movies.results.map((movie: any, index: number) => (
                            <li className="movie" 
                                key={movie.id}
                            >
                                <div className="movie__image">
                                    <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="movie__img" />
                                </div>
                                <div className="movie__info">
                                    <p className="movie__text">{movie.title}</p>
                                    <div className="score">
                                        <div className="score__star"></div>
                                        <div className="score__star"></div>
                                        <div className="score__star"></div>
                                        <div className="score__star"></div>
                                        <div className="score__star"></div>
                                        <div className="score__layer"></div>
                                    </div>
                                </div>
                            </li>
                        ))
                        : null
                    }
                </ul>
                <div className="movies__layer"></div>
            </div>
        </>
    );
};

export default MovieSlider;