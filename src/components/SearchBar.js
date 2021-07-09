import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const SearchBar = ({ setAutocompleteRender }) => {

    const dispatch = useDispatch();
    const { setSearchKeyword, setSubmitKeyword } = bindActionCreators(actionCreators, dispatch);
    const { searchKeyword } = useSelector(state => state.keywords);

    const submitSearch = (e) => {
        e.preventDefault();
        setSubmitKeyword(searchKeyword);
    }

    return (
        <form className="search" onSubmit={(e) => submitSearch(e)}>
            <input type="text" 
                className="search-bar" 
                value={searchKeyword} 
                onChange={(e) => setSearchKeyword(e.target.value)} 
                data-testid="search-bar" 
                onClick={() => setAutocompleteRender(true)}/>
            <button type="submit" className="search-bar-btn" >Search</button>
        </form>
    )
}

export default SearchBar
