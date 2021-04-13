import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';
import RightSidebar from '../RightSidebar/RightSidebar';

import { searchAll, searchUsers, searchPosts, searchGroups } from '../../store/ducks/search';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadInvites } from '../../store/ducks/invites';
import { loadFriends } from '../../store/ducks/users';


const SearchPage = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [searchType, setSearchType] = useState('posts')

    let results = useSelector(state => state.search.results)
    const searchParams = new URLSearchParams(window.location.search.substring(1))
    let query = searchParams.get('query');
    const user = useSelector(state =>state.currentUser)

    
    useEffect(() => {
        (async () => {
            await dispatch(loadCurrentUser())
            await dispatch(loadInvites())
            await dispatch(loadFriends(user.id))
            if (searchType === 'users') {
                await dispatch(searchUsers(query))
            } else if (searchType === 'groups') {
                await dispatch(searchGroups(query))
            } else {
                await dispatch(searchPosts(query))
            }
            // await dispatch(searchAll(query))
        })()
    }, [searchType])

    return (
        <div className='searchpage'>
            <Sidebar user={user} />
            <NavBar />
            <RightSidebar user={user} setAuthenticated={setAuthenticated} />
            <SearchPageHeader query={query} results={results} searchType={searchType} setSearchType={setSearchType} />
            <SearchResults query={query} results={results} />
        </div>
    )
}

export default SearchPage;