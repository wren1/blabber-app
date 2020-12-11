import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserSearchResult from './UserSearchResult';
import GroupSearchResult from './GroupSearchResult';


const SearchResults = ({ results }) => {

    const handle = (res) => {
        if (res.owner_id) {
            return <GroupSearchResult group={res} key={res.id} />
        } else {
            return <UserSearchResult user={res} key={res.id} />
        }
    }

    return (
        <div className='searchresults'>
            {!results.length ? null : results.map(res => {
                return (handle(res))
            })}
        </div>
    )
}

export default SearchResults;