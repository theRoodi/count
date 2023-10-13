import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {saveState} from '../utils/localstorage';
import {CounterType} from './Counter';
import {resetValueAC, setValueStartAC, setValueStopAC, toggleValueAC} from '../bll/counterReducer';

export const CounterSettings = () => {
    const toggle = useSelector<RootStateType, boolean>(state => state.counter.toggle)
    const state = useSelector<RootStateType, CounterType>(state => state)
    const first = useSelector<RootStateType, number>(state => state.counter.start)
    const second = useSelector<RootStateType, number>(state => state.counter.stop)
    const dispatch = useDispatch()


    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueStartAC(Number(e.currentTarget.value)))
        dispatch(resetValueAC(Number(e.currentTarget.value)))
    }
    const onChangeStop = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueStopAC(Number(e.currentTarget.value)))
    }

    const clear = () => {
        dispatch(setValueStartAC(0))
        dispatch(resetValueAC(0))
        dispatch(setValueStopAC(0))
        localStorage.clear()
    }

    const onSaveHandler = () => {
        dispatch(resetValueAC(state.counter.start))
        saveState(state)
        dispatch(toggleValueAC(!toggle))
    }
    return (
        <>
            <div className="counter">
                <div className="count">
                    <input type="number" value={first | 0} onChange={onChangeStart}/>
                    <input type="number" value={second | 0} onChange={onChangeStop}/>

                </div>
                <div className="buttons">
                    <button onClick={onSaveHandler}>Save</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </div>
        </>
    );
};
