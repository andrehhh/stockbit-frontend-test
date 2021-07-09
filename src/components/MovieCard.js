import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = React.forwardRef((props, ref) => {

	const { movie, lastMovie } = props;

	if(lastMovie) {
		return (
		<div className="movie-card">
			<img className="movie-card-image" src={movie.Poster} alt={movie.Title} />
			<Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
				<div className="movie-card-info" ref={ref}>
					<div className="movie-card-info-content">
						<div className="movie-card-title">{movie.Title}</div>
						<div className="movie-card-year">{movie.Year}</div>
					</div>
				</div>
			</Link>
		</div>
		)
	}

	return (
		<div className="movie-card">
			<img className="movie-card-image" src={movie.Poster} alt={movie.Title} />
			<Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
				<div className="movie-card-info">
					<div className="movie-card-info-content">
						<div className="movie-card-title">{movie.Title}</div>
						<div className="movie-card-year">{movie.Year}</div>
					</div>
				</div>
			</Link>
		</div>
	)
})

export default MovieCard
