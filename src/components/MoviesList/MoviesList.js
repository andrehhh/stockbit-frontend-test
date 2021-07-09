import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import useFetchMovies from '../../useFetchMovies';
import MovieCard from '../MovieCard';

const MoviesList = ({ submitKeyword }) => {

  const [page, setPage] = useState(1);

  const { isLoading, movies, hasMore } = useFetchMovies(submitKeyword, page);

	const observer = useRef();

	const lastMovieRef = useCallback((node) => {
		if(isLoading) return;
		if(observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver((entries) => {
			if(entries[0].isIntersecting && hasMore) {
				setPage((prevPage) => prevPage + 1);
			}

		})
		if(node) observer.current.observe(node)
	}, [isLoading, hasMore])

	return (
		<section className="movies-list">
			<div className="title" data-testid="search-keyword">Search for: {submitKeyword}</div>
			<div className="movies-cards">
			{movies.map((movie, index) => {
				if(movies.length === index + 1) {
					return (
						<MovieCard movie={movie} lastMovie={true} ref={lastMovieRef} />
					)
				} else {
					return (
						<MovieCard movie={movie} lastMovie={false} />
					)
				}
			})}
			</div>
		</section>
	)
}

export default MoviesList
