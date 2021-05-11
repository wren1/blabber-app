import React from 'react';


const SearchPageHeader = ({ query, results, searchType, setSearchType }) => {
    const arr = ['posts', 'users', 'groups']
    
    return (
        <div className='searchpage__header'>
            <div className='searchpage__header-options'>
                {
                    arr.forEach(type => {
                        return (
                            <div onClick={() => setSearchType(type)} className={searchType !== type ? null : 'lightgray'} >
                                Posts
                            </div>
                        )
                    })
                }
                {/* <div onClick={() => setSearchType('posts')} className={searchType !== 'posts' ? null : 'lightgray'} >
                    Posts
                </div>
                <div onClick={() => setSearchType('users')} className={searchType !== 'users' ? null : 'lightgray'}>
                    Users
                </div>
                <div onClick={() => setSearchType('groups')} className={searchType !== 'groups' ? null : 'lightgray'}>
                    Groups
                </div> */}
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