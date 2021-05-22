import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = () => {

    return (
        <div className='backdrop'>
            <CircularProgress />
        </div>
    )
}

export default Loading;