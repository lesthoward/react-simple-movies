import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import './SecMovies.css'
interface SecMoviesProps {
	apiURL: string
	title: string
}
const SecMovies:React.FC<SecMoviesProps> = ({apiURL, title}) => {
	const [movies, setMovies] = useState<any>();
	useEffect(() => {
		const getMovies = async () => {
			const res: any = await axios.get(apiURL);
			setMovies(res.data);
		};
		getMovies();
	}, [movies, apiURL]);

	return (
		<>
			<section className="SecMovies container">
                    <h2 className="SecMovies__title">{title}</h2>
                    <div className="SecMovies__wrapper grid">
					{
                        movies?.results
						? movies.results.map((movie: any, index: number) => (
								<Movie key={movie.id} movie={movie} />
						  ))
						: null
                    }
                    </div>
			</section>
		</>
	);
};

export default SecMovies;
