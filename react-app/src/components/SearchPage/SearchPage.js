import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar'
import SearchContainer from './SearchContainer';
import RightSidebar from '../RightSidebar/RightSidebar';
import Loading from '../Loading';

import { searchUsers, searchPosts, searchGroups } from '../../store/ducks/search';
import { loadCurrentUser } from '../../store/ducks/currentUser';
import { loadInvites } from '../../store/ducks/invites';
import { loadFriends } from '../../store/ducks/users';
import { loadUserGroups } from '../../store/ducks/groups';


const SearchPage = ({ setAuthenticated }) => {
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch();
    
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
            await dispatch(loadUserGroups(user.id))
            if (searchType === 'users') {
                await dispatch(searchUsers(query))
            } else if (searchType === 'groups') {
                await dispatch(searchGroups(query))
            } else {
                await dispatch(searchPosts(query))
            }
            setLoaded(true)
        })()
    }, [searchType])
    
    return (
        <div className='search'>
            {!loaded ? <Loading /> : null}
            <NavBar />
            <div className='search-main' >
                <Sidebar user={user} />
                <SearchContainer query={query} results={results} searchType={searchType} setSearchType={setSearchType} />
                <RightSidebar user={user} setAuthenticated={setAuthenticated} />
            </div>
        </div>
    )
}

export default SearchPage;