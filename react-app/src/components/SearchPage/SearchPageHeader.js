import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {  } from '../../store/ducks/search';


const SearchPageHeader = ({ query, results, searchType, setSearchType }) => {
    

    
    return (
        <div className='searchpage__header'>
            <div className='searchpage__header-options'>
                <div onClick={() => setSearchType('posts')} className={searchType !== 'posts' ? null : 'lightgray'} >
                    Posts
                </div>
                <div onClick={() => setSearchType('users')} className={searchType !== 'users' ? null : 'lightgray'}>
                    Users
                </div>
                <div onClick={() => setSearchType('groups')} className={searchType !== 'groups' ? null : 'lightgray'}>
                    Groups
                </div>
            </div>
            <div className='searchpage__header-txt'>
                <div className='searchpage__header-title'>
                    " {query} "
                </div>
                <div className='searchpage__header-res'>
                    {results.length} Results
                </div>
            </div>
        </div>
    )
}

export default SearchPageHeader;