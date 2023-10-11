import React from 'react';
import './App.css';
import Counter from './components/Counter';
import {CounterSettings} from './components/CounterSettings';

function App() {


    return (
        <>
            <div className='App'>
                <Counter />
                <CounterSettings />
            </div>
        </>
    );
}

export default App;
