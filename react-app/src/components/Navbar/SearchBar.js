import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { searchPosts } from '../../store/ducks/search';


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let q = encodeURIComponent(query);
        (async () => {
            await dispatch(searchPosts(query))
        })()
        history.push(`/search?query=${q}`)
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input value={query} className='searchbar' placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchBar;