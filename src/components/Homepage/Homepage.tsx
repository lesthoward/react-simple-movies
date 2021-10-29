import React from 'react';
import MovieSlider from '../MovieSlider/MovieSlider';
import SecMovies from '../SecMovies/SecMovies';

const Homepage = () => {
    return (
        <>
            <MovieSlider/>
            <SecMovies
                title="En cines"
                apiURL="https://api.themoviedb.org/3/movie/now_playing?api_key=40934736fdf8735c5e2986d6be76139e&language=en-US&page=1"
            />
        </>
    );
};

export default Homepage;