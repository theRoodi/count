import React from 'react';

export type CountType = {
    start: number
    stop: number
    toggle: boolean
    setCount: () => void
}

const Counter = (props: CountType) => {
    return (
        <div className={'display'}>
            {
                props.toggle
                    ? <div className={props.start !== props.stop ? 'text' : 'red_text'}>{props.start}</div>
                    : <>
                        <div className={'text'}>{props.start}</div>
                        <input type="number" name={'start'} value={props.start}/>
                        <input type="number" name={'stop'}/>
                    </>
            }
        </div>
    );
};

export default Counter;