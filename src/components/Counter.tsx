import React from 'react';
import {Count} from './Count';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {incValueAC, resetValueAC, setValueStartAC, setValueStopAC} from '../bll/counterReducer';
import {loadState} from '../utils/localstorage';

export type CountType = {}
export type CounterType = {
    counter: { start: number; stop: number; toggle: boolean; reset: number; }
}

const Counter = (props: CountType) => {
    const start = useSelector<RootStateType, number>(state => state.counter.start)
    const stop = useSelector<RootStateType, number>(state => state.counter.stop)
    const reset = useSelector<RootStateType, number>(state => state.counter.reset)
    const state = useSelector<RootStateType,CounterType>(state => state)

    const dispatch = useDispatch()

    const incValue = () => {
        dispatch(incValueAC(start))
    }
    const resetValue = () => { 
        dispatch(resetValueAC(reset))
    }
    const getValue = () => {
        dispatch(setValueStartAC(loadState().counter.reset))
        dispatch(resetValueAC(loadState().counter.reset))
        dispatch(setValueStopAC(loadState().counter.stop))
        console.log(loadState())

    }

    return (
        <>
            <div className='counter'>
                <Count/>
                <div className='buttons'>
                    <button onClick={incValue} disabled={start === stop}>↑</button>
                    <button onClick={resetValue}>↓</button>
                    <button onClick={getValue}>GET</button>
                </div>
            </div>
        </>
    );
};

export default Counter;