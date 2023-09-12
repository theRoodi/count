import {RootStateType} from '../bll/store';

export const loadState = () => {
    try {
        const newState = localStorage.getItem('value')
        if (newState === null) {
            return undefined
        }
        return JSON.parse(newState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: RootStateType) => {
    try {
        const newState = JSON.stringify(state)
        localStorage.setItem('value', newState)
    } catch {

    }
}