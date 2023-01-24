import React, {useEffect, useState} from 'react';
import UniButton from './UniButton';
import Counter from './Counter';

export const CounterSettings = (props: any) => {
    const [value, setValue] = useState(() => {
        return Number(localStorage.getItem('counterValue'))
    })

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incValue = () => setValue(value + 1)
    return (
        <div className={'counter'}>
            <Counter count={value} start={0} stop={5}/>
            <UniButton count={value} callback={() => {
            }} name={'↑'} disabled />
            <UniButton count={value} callback={() => {
            }} name={'↓'} disabled/>
            <UniButton count={value} callback={incValue} name={'⋯'}/>
        </div>
    );
};
