import React from 'react';
import './Home.css';
import Buffer from './Buffer';
import whitelogo from './whitelogo.png';
import 'animate.css';
import Buffer2 from './Buffer2';

const Home = ({ name }) => {
    let darkmodeToggle = false;
    return (
        <div className="wrapper">
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                borderBottom: '5px solid red',
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <h1 id='header' style={{ fontWeight: '900', fontSize: '60px'}}>Welcome, {name}.</h1>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '50%'}}>
                    <img style={{justifyContent: 'flex-start', marginBottom: '12px'}} alt='' src={whitelogo}/>
                </div>
            </div>
            <button onClick={() => {
                if (darkmodeToggle === false) {
                    darkmodeToggle = true;
                    document.querySelector('body').style.background = '#051E23';
                    document.getElementById('header').style.color = 'white';
                    document.getElementById('darkmode-btn').style.background = 'linear-gradient(to bottom, #051E23, gray)';
                    document.getElementById('darkmode-btn').style.border = '2px solid white';
                    document.getElementById('darkmode-btn').innerText = '🌚 Toggle Light Mode';
                } else {
                    darkmodeToggle = false;
                    document.querySelector('body').style.background = 'white';
                    document.getElementById('header').style.color = 'black';
                    document.getElementById('darkmode-btn').style.background = 'linear-gradient(to bottom, gray, white)';
                    document.getElementById('darkmode-btn').style.border = '2px solid black';
                    document.getElementById('darkmode-btn').innerText = '🌞 Toggle Dark Mode';
                }
            }}
                id='darkmode-btn' style={{ 
                border: '2px solid black', 
                borderRadius: '100px', 
                padding: '12px 12px', 
                marginTop: '20px', 
                background: 'linear-gradient(to bottom, gray, white)', 
                fontSize: '20px'}}>🌞 Toggle Dark Mode</button><br></br>
            <div className="animate__animated animate__bounceInRight" style={{ borderRadius: '25px' }} id="cool-container"></div>
            <Buffer />
            <Buffer2 />
        </div>
    );
}

export default Home;