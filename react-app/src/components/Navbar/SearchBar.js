import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { searchAll } from '../../store/ducks/search';


const SearchBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState();

    const handleSubmit = () => {
        dispatch(searchAll(query))
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input className='searchbar' onChange={(e) => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchBar;