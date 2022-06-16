import React from 'react';

type CountType = {
    count: number
    start: number
    stop: number
}

const Counter = (props: CountType) => {
    return (
        <div className={'count'}>
            <div className={props.count !== props.stop ? 'text' : 'red_text'}>{props.count}</div>
        </div>
    );
};

export default Counter;