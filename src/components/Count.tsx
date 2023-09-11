import React, {useReducer, useState} from 'react';
import Counter from './Counter';
import UniButton from './UniButton';

type CountPropsType = {
    toggle: boolean
    setToggle: () => boolean
}
export const Count = (props: any) => {

    const changeToggle = () => {
        props.setToggle(false)
    }

    const counterReducer = (count: number, action: any) => {
        switch (action.type) {
            case 'inc':
                return count + 1
            case 'res':
                return props.start
            default:
                return count
        }
    }

    const [count, dispatchNumber] = useReducer(counterReducer, props.start);
    const setCount = () => {

    }

    return (
        <>
            <div className={'counter'}>
                <Counter start={props.start} stop={props.stop} toggle={props.toggle} setCount={setCount}/>
                <UniButton callback={() => dispatchNumber({type: 'inc'})} name={'↑'}
                           disabled={count === props.stop}/>
                <UniButton callback={() => dispatchNumber({type: 'res'})} name={'↓'}
                           disabled={count === props.start}/>
                <UniButton callback={() => dispatchNumber({type: 'res'})} name={'OK'}
                           disabled={count === props.start}/>
                <UniButton callback={changeToggle} name={'⋯'}/>

            </div>
        </>


    );
};
