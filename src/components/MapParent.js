import React, { useState } from 'react';

function MapWrapper() {
    const places = ['one', 'two']
    const [count, setCount] = useState(places[0]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(places[0])}>Click me</button>
            <button onClick={() => setCount(places[1])}>Click me</button>
        </div>
    );
}

export default MapWrapper

