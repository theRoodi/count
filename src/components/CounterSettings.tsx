import React, {useEffect, useState} from 'react';
import UniButton from './UniButton';
import Counter from './Counter';

export const CounterSettings = (props: any) => {

    useEffect(() => {
        localStorage.setItem('start', JSON.stringify(props.start))
    }, [props.start])
    useEffect(() => {
        localStorage.setItem('stop', JSON.stringify(props.stop))
    }, [props.stop])

    const changeToggle = () => {
        props.setToggle(true)
    }

    const saveValue = () => {

    }
    return (
        <div className={'counter'}>
            <Counter start={0} stop={5} toggle={props.toggle} setCount={props.setCount}/>
            <UniButton callback={() => {}} name={'↑'} />
            <UniButton callback={() => {}} name={'↓'} />
            <UniButton callback={saveValue} name={'OK'}/>
            <UniButton callback={changeToggle} name={'⋯'}/>
        </div>
    );
};
