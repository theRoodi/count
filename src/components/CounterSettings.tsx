import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';
import {loadState, saveState} from '../utils/localstorage';
import {CounterType} from './Counter';
import {resetValueAC, setValueStartAC, setValueStopAC} from '../bll/counterReducer';

export const CounterSettings = (props: any) => {
    const reset = useSelector<RootStateType, number>(state => state.counter.reset)
    const state = useSelector<RootStateType,CounterType>(state => state)
    const first = useSelector<RootStateType, number>(state => state.counter.start)
    const second = useSelector<RootStateType, number>(state => state.counter.stop)
    const dispatch = useDispatch()

    // const [start, setStart] = useState(first)
    // const [stop, setStop] = useState(second)

    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueStartAC(Number(e.currentTarget.value)))
        dispatch(resetValueAC(Number(e.currentTarget.value)))
        // setStart(Number(e.currentTarget.value))
    }
    const onChangeStop = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueStopAC(Number(e.currentTarget.value)))
        // setStop(Number(e.currentTarget.value))
    }

    const clear = () => {
        localStorage.clear()
    }

    const onSaveHandler = () => {
        saveState(state)
    }

    const getStorageValues = () => {

    }
    return (
        <>
            <div className="counter">
                <div className='count'>
                    <input type="number" value={first | 0} onChange={onChangeStart}/>
                    <input type="number" value={second | 0} onChange={onChangeStop}/>

                </div>
                <div className='buttons'>
                    <button onClick={onSaveHandler}>Save</button>
                    <button onClick={getStorageValues}>Get</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </div>
        </>
    );
};
