import React from 'react';

type ButtonType = {
    callback: () => void
    count: number
    name: string
    stop:number
    disabled: boolean

}
const UniButton = (props: ButtonType) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
    );
};

export default UniButton;