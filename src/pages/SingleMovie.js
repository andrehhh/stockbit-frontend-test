import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const SingleMovie = () => {

	const { id } = useParams();
	const [movie, setMovie] = useState({});

	useEffect(() => {

		axios({
			method: 'GET',
			url: 'http://www.omdbapi.com/?apikey=faf7e5bb',
			params: { i: id }

		}).then((res) => {
				console.log(res.data);
				setMovie(res.data);
		}).catch((e) => {
			if(axios.isCancel(e)) return;
		})

	}, [id])

	console.log(movie);

	return (
		<main className="single-movie">
			<img src={movie.Poster} alt="" />
			<div className="title">Title: { movie.Title }</div>
			<div className="actors">Actors: { movie.Actors }</div>
			<div className="runtime">Runtime: { movie.Runtime }</div>
			<div className="rating">IMDB Rating: { movie.imdbRating }</div>
			<div className="votes">IMDB Votes: { movie.imdbVotes }</div>
		</main>
	)
}

export default SingleMovie
