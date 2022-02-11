import React from 'react';
import './Card.css';

const cardStyles = [
    {
        width: '300px',
        height: '300px',
        boxShadow: '5px 5px 5px gray',
        borderRadius: '25px',
        background: 'white',
        display: 'flex', 
        flexDirection: 'column',
        margin: '20px'
    },
    { textAlign: 'center', fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif` },
    { 
        width: '300px',
        height: '200px'
    }
];

const Card = ({ name, img, link }) => {
    return (
        <div id='card' style={cardStyles[0]}>
            <h2 style={cardStyles[1]}>{name}</h2>
            <a href={link}><img alt='' style={cardStyles[2]} src={img} /></a>
        </div>
    )
}

export default Card;