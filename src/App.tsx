import React, {useState} from 'react';
import './App.css';
import {Count} from './components/Count';
import {CounterSettings} from './components/CounterSettings';

function App() {
    const [loggle, setToggle] = useState(false)

    return (
        <div className="App">
            toggle
            ? <Count toggle={loggle} setToggle={setToggle}/>
            : <CounterSettings toggle={loggle} setToggle={setToggle}/>
        </div>
    );
}

export default App;
