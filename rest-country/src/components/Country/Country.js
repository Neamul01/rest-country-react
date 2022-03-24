import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, capital } = props.country;
    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default Country;