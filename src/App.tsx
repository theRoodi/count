import React, {useState} from 'react';
import './App.css';
import {Count} from './components/Count';
import {CounterSettings} from './components/CounterSettings';

function App() {
    const [toggle, setToggle] = useState(true)

    return (
        <div className="App">
            {
                toggle
                    ? <Count toggle={toggle} setToggle={setToggle}/>
                    : <CounterSettings toggle={toggle} setToggle={setToggle}/>
            }
        </div>
    );
}

export default App;
