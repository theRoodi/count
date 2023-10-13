import React from 'react';
import './App.css';
import Counter from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import {useSelector} from 'react-redux';
import {RootStateType} from './bll/store';

function App() {
    const toggle = useSelector<RootStateType, boolean>(state => state.counter.toggle)

    return (
        <>
            <div className="App">
                {toggle
                    ? <CounterSettings/>
                    : <Counter/>
                }
            </div>
        </>
    );
}

export default App;
