import React from 'react';
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

    console.log(props.start)

    return (
        <>
            <div className={'counter'}>
                <Counter start={props.start} stop={props.stop} toggle={props.toggle} setCount={() => {
                }}/>
                <UniButton callback={props.incValue} name={'↑'}
                           disabled={props.start === props.stop}/>
                <UniButton callback={() => {
                }} name={'↓'}
                           disabled={props.stop === props.start}/>
                <UniButton callback={() => {
                }} name={'OK'}
                           disabled={props.stop === props.start}/>
                <UniButton callback={changeToggle} name={'⋯'}/>

            </div>
        </>


    );
};
