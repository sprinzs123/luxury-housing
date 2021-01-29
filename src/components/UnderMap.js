import React from 'react';

function Options(props) {
    return(
        <div>
        <h1>here</h1>
        {props.data.map(home => <div key={home.name}>{home.name}</div>)}
        </div>

    )    
}

export default Options
