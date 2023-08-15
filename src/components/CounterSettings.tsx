import React, {useEffect, useState} from 'react';
import UniButton from './UniButton';
import Counter from './Counter';

export const CounterSettings = (props: any) => {
    const [setting, setSetting] = useState(props.toggle)
    const [value, setValue] = useState(() => {
        return Number(localStorage.getItem('counterValue'))
    })

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const changeToggle = () => {
        props.setToggle(setSetting(!setting))
    }

    const incValue = () => setValue(value + 1)
    const decValue = () => setValue(value - 1)
    const saveValue = () => setValue(value)
    return (
        <div className={'counter'}>
            <Counter count={value} start={0} stop={5}/>
            <UniButton count={value} callback={incValue} name={'↑'} />
            <UniButton count={value} callback={decValue} name={'↓'} />
            <UniButton count={value} callback={saveValue} name={'OK'}/>
            <UniButton count={value} callback={changeToggle} name={'⋯'}/>
        </div>
    );
};
