import React from 'react';
import { useHistory } from 'react-router-dom';


const Logo = () => {
    const history = useHistory();

    return (
        <div className='logo-button'>
            <img src={require('../../images/blabber.png')} className='logo' onClick={() => history.push('/')}/>
        </div>
    )
}

export default Logo;