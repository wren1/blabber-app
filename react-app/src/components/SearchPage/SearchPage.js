import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';

import { searchAll } from '../../store/ducks/search';
import { loadCurrentUser } from '../../store/ducks/currentUser';


const SearchPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let results = useSelector(state => state.search.results)
    const searchParams = new URLSearchParams(window.location.search.substring(1))
    let query = searchParams.get('query');
    const user = useSelector(state =>state.currentUser)

    
    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(searchAll(query))
        })()
    }, [])

    return (
        <div className='searchpage'>
            <Sidebar user={user} />
            <NavBar />
            <SearchPageHeader query={query} results={results} />
            <SearchResults query={query} results={results} />
        </div>
    )
}

export default SearchPage;