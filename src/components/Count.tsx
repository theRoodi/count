import React from 'react';
import {useSelector} from 'react-redux';
import {RootStateType} from '../bll/store';

type CountPropsType = {}
export const Count = (props: CountPropsType) => {

    const start = useSelector<RootStateType, number>(state => state.counter.start)

    return (
        <>
            <div className={'count'}>
                {start}
            </div>
        </>


    );
};
