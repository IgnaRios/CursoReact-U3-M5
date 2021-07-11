import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header';
import Button from './buttons';
import './contador.css';

function Contador () {
    const contador = useSelector((state) => state.number);
    
    return (
        <div className='main'>
            <Header />
            <h3>
                {contador}
            </h3>
            <Button />
        </ div>
    )
}

export default Contador;