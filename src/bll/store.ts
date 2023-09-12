import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)


export type RootStateType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store