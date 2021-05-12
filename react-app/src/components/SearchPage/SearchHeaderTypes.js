import React from 'react';


const SearchHeaderTypes = ({ searchType, setSearchType }) => {
    const types = ['posts', 'users', 'groups'];

    
    return (
        <div className='searchpage__header-options'>
            {
                types.map(type => (
                        <div onClick={() => setSearchType(type)} className={searchType === type ? 'lightgray' : null} >
                            {type[0].toUpperCase() + type.slice(1)}
                        </div>
                    ))
            }
        </div>
    )
}

export default SearchHeaderTypes;