import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Autocomplete from '../components/Autocomplete';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const { searchKeyword, submitKeyword } = useSelector(state => state.keywords);

    const [autocompleteRender, setAutocompleteRender] = useState(false);

    const handleAutocompleteRender = () => {
        if(autocompleteRender === true) {
            setAutocompleteRender(false);
        }
    }

    return (
        <main className="home" onClick={handleAutocompleteRender}>
            <div className="container">
                <div class="title">Movie Search</div>

                <SearchBar setAutocompleteRender={setAutocompleteRender}/>

                {autocompleteRender && <Autocomplete searchKeyword={searchKeyword} /> }

                <MoviesList submitKeyword={submitKeyword} />
            </div>
        </main>
    )
}

export default Home
