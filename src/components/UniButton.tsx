import React from 'react';

export type ButtonType = {
    callback: () => void
    name: string
    disabled?: boolean

}
const UniButton = (props: ButtonType) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.name}</button>
    );
};

export default UniButton;