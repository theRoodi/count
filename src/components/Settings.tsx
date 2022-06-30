import React from 'react';
import Counter from './Counter';
import UniButton from './UniButton';

type SettingPropsType = {

}

export const Settings = (props: SettingPropsType) => {


    return (
        <div>
            <Counter count={1} start={1} stop={1} />
            <Counter count={1} start={1} stop={1} />
            <UniButton callback={()=>{}} count={1} name={"uni"} disabled={false} />
        </div>
    );
};
