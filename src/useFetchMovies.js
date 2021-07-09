import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useFetchMovies = (keyword, page) => {


	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(false);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies([]);
	}, [keyword])

	useEffect(() => {
		let cancel;
		setIsLoading(true);

		axios({
			method: 'GET',
			url: 'http://www.omdbapi.com/?apikey=faf7e5bb',
			params: { s: keyword, page: page },
			cancelToken: new axios.CancelToken(c => cancel = c)

		}).then((res) => {
			if(res.data.Search) {
				setMovies((prevState) => {
					if(res.data.totalResults > 5 && prevState.length + 10 < res.data.totalResults) {
						setHasMore(true);
					} else setHasMore(false);
					return [...prevState, ...res.data.Search];
				});
			}
			setIsLoading(false);

		}).catch((e) => {
			if(axios.isCancel(e)) return;
		})

		// Cleanup cancels axios, reset movies
		return () => {
			cancel();
		}
	}, [keyword, page])

	return { isLoading, movies, hasMore };
}

export default useFetchMovies
