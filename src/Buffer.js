import React from 'react';
import Card from './Card';
import 'animate.css';
import amazonlogo from './assets/amazonlogo.png';
import lightbulb from './assets/lightbulb.png';
import joystick from './assets/joystick.png';
import netflix from './assets/netflix.png';

const styleParams = {
    marginTop: '50px',
    borderRadius: '20px',
    width: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    background: 'linear-gradient(to right, red, magenta)'
}

const cardWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
}

const activities = [
    {
        name: 'Shop',
        img: amazonlogo,
        link: 'https://www.amazon.com/'
    },
    {
        name: 'Read',
        img: lightbulb,
        link: 'https://www.quora.com/'
    },
    {
        name: 'Play',
        img: joystick,
        link: 'https://www.a10.com/'
    },
    {
        name: 'Watch',
        img: netflix,
        link: 'https://www.netflix.com/'
    },
];


const Buffer = () => {
    return (
        <div className="animate__animated animate__bounceInLeft" style={styleParams}>
            <h1 style={{ textAlign: 'center', color: 'white'}}>What would you like to do today?</h1>
            <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600', color: 'white' }}>Pick from a variety of activities</p>
            <div style={cardWrapperStyles}>
                <Card link={activities[0].link} name={activities[0].name} img={activities[0].img}/>
                <Card link={activities[1].link} name={activities[1].name} img={activities[1].img}/>
                <Card link={activities[2].link} name={activities[2].name} img={activities[2].img}/>
                <Card link={activities[3].link} name={activities[3].name} img={activities[3].img}/>
            </div>
        </div>
    )
}

export default Buffer;