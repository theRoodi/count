import React, {useState} from 'react';
import Counter from './Counter';
import UniButton from './UniButton';

const Count = () => {
    const start = 0;
    const stop = 5
    const [count, setCount] = useState<number>(start);

    const onClickChangeHandler = () => {
        setCount(count + 1)
    }
    const onClickResetHandler = () => {
        setCount(start)
    }
    const onClickSettingHandler = () => {
        setCount(start)
    }



    return (
        <>
            <div className={'counter'}>
                <Counter count={count} start={start} stop={stop}/>
                <UniButton count={count} callback={onClickChangeHandler} name={'↑'} disabled={count === stop}/>
                <UniButton count={count} callback={onClickResetHandler} name={'↓'} disabled={count === start}/>
                <UniButton count={count} callback={onClickSettingHandler} name={'⋯'}/>

            </div>
        </>


    );
};

export default Count;