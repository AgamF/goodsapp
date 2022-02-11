import React from 'react';
import Card from './Card';
import 'animate.css';

const styleParams = {
    marginTop: '50px',
    borderRadius: '20px',
    width: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    background: 'linear-gradient(to right, green, lightblue)'
}

const cardWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
}

const Buffer2 = () => {
    return (
        <div className="animate__animated animate__bounceInLeft" style={styleParams}>
            <h1 style={{ textAlign: 'center', color: 'white'}}>What can we do for you?</h1>
            <div style={cardWrapperStyles}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Buffer2;