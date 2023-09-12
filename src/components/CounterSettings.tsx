import React from 'react';
import UniButton from './UniButton';
import Counter from './Counter';

export const CounterSettings = (props: any) => {
    const changeToggle = () => {
        props.setToggle(true)
    }

    const saveValue = () => {

    }
    return (
        <div className={'counter'}>
            <Counter start={props.start} stop={props.stop} toggle={props.toggle} setCount={props.setCount}/>
            <UniButton callback={() => {
            }} name={'↑'}/>
            <UniButton callback={() => {
            }} name={'↓'}/>
            <UniButton callback={saveValue} name={'OK'}/>
            <UniButton callback={changeToggle} name={'⋯'}/>
        </div>
    );
};
