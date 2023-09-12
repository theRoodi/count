import React, {useState} from 'react';
import './App.css';
import {Count} from './components/Count';
import {CounterSettings} from './components/CounterSettings';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './bll/store';
import {incValueAC} from './bll/counterReducer';

function App() {
    const [toggle, setToggle] = useState(true)
    const start = useSelector<RootStateType, number>(state => state.counter.start)
    // const stop = useSelector<RootStateType, number>(state => state.counter.stop)

    const dispatch = useDispatch()

    const incValue = () => {
        dispatch(incValueAC())
    }
    const setCount = () => {

    }
    return (
        <div className="App">
            {
                toggle
                    ? <Count toggle={toggle} setToggle={setToggle}
                             start={start} stop={7} setCount={incValue}/>
                    :
                    <CounterSettings toggle={toggle} setToggle={setToggle}
                                     start={start} stop={7} setCount={setCount}/>
            }
        </div>
    );
}

export default App;
