import React from 'react';
import {useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';

export const Count = () => {

    const start = useSelector<RootStateType, number>(state => state.counter.start)

    return (
        <>
            <div className={'count'}>
                {start}
            </div>
        </>


    );
};
