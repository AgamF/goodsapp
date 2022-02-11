import React from 'react';

const Signin = ({ signIn }) => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: '15px', 
            boxShadow: '5px 5px 15px 10px gray',
            marginTop: '150px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            width: '500px' }}>
            <h1 style={{ fontFamily: 'Arial Black' }}>What's your name?</h1>
            <div style={{ display: 'flex', margin: '20px', flexDirection: 'column' }}>
                <input style={{padding: '8px 10px'}} type="text" placeholder="Your name here" />
                <button style={{ marginTop: '15px',
                borderRadius: '3px', 
                padding: '10px 14px',
                border: 'none',
                fontWeight: 'bold',
                color: 'white',
                background: 'blue'}} 
                onClick={signIn}
                type="button">Submit</button>
            </div>
        </div>
    );
}

export default Signin;