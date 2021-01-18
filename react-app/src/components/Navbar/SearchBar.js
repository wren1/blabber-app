import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { searchAll } from '../../store/ducks/search';


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let q = encodeURIComponent(query);
        (async () => {
            await dispatch(searchAll(query))
        })()
        history.push(`/search?query=${q}`)
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input className='searchbar' placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchBar;