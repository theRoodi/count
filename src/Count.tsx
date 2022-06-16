import React, {useState} from 'react';
import Counter from './Counter';
import UniButton from './UniButton';

const Count = () => {
    const start = 0;
    const stop = 5
    const [count, setCount] = useState<number>(start);

    const onClickChange= () => {
        setCount(count + 1)
    }
    const onClickReset= () => {
        setCount(start)
    }



    return (
        <>
            <div className={'counter'}>
                <Counter count={count} start={start} stop={stop}/>
                <UniButton count={count} callback={onClickChange} name={'inc'} stop={stop} disabled={count === stop}/>
                <UniButton count={count} callback={onClickReset} name={'reset'} stop={stop} disabled={count === start}/>
            </div>
        </>


    );
};

export default Count;