import React, {useReducer, useState} from 'react';
import Counter from './Counter';
import UniButton from './UniButton';


export const Count = () => {
    const start = 0;
    const stop = 5;
    const counterReducer = (count: number, action: any) => {
        switch (action.type) {
            case 'inc':
                return count + 1
            case 'res':
                return start
            case 'set':
                return start
            default:
                return count
        }
    }

    const [count, dispatchNumber] = useReducer(counterReducer, start);

    return (
        <>
            <div className={'counter'}>
                <Counter count={count} start={start} stop={stop}/>
                <UniButton count={count} callback={() => dispatchNumber({type: 'inc'})} name={'↑'}
                           disabled={count === stop}/>
                <UniButton count={count} callback={() => dispatchNumber({type: 'res'})} name={'↓'}
                           disabled={count === start}/>
                <UniButton count={count} callback={() => dispatchNumber({type: 'set'})} name={'⋯'}/>

            </div>
        </>


    );
};
