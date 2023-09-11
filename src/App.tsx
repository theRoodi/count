import React, {useState} from 'react';
import './App.css';
import {Count} from './components/Count';
import {CounterSettings} from './components/CounterSettings';

function App() {
    const [toggle, setToggle] = useState(true)
    const [start, setStart] = useState(() => {
        return Number(localStorage.getItem('start'));
    })
    const [stop, setStop] = useState(() => {
        return Number(localStorage.getItem('stop'));
    })

    const setCount = (start: number, stop: number) => {
        setStart(start)
        setStop(stop)
    }


    return (
        <div className="App">
            {
                toggle
                    ? <Count toggle={toggle} setToggle={setToggle}
                             start={start} stop={stop} setCount={setCount} />
                    :
                    <CounterSettings toggle={toggle} setToggle={setToggle}
                                     start={start} stop={stop} setCount={setCount} />
            }
        </div>
    );
}

export default App;
