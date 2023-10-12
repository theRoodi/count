import React from 'react';
import {Count} from './Count';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {incValueAC, resetValueAC, setValueAC} from '../bll/counterReducer';
import {loadState, saveState} from '../utils/localstorage';

export type CountType = {}
type CounterType = {
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

    const setValue = () => {
        dispatch(setValueAC(start))
        saveState(state)
    }
    const getValue = () => {
       loadState()
    }
    const toggleSetting = () => {

    }
    const clear = () => {
        localStorage.clear()
    }

    return (
        <>
            <div>
                <Count/>
                <div className={'counter'}>
                    <button onClick={incValue}>↑</button>
                    <button onClick={resetValue}>↓</button>
                    <button onClick={setValue}>OK</button>
                    <button onClick={getValue}>GET</button>
                    {/*<button onClick={toggleSetting}>⊚</button>*/}
                    <button onClick={clear}>CLR</button>
                </div>
            </div>
        </>
    );
};

export default Counter;