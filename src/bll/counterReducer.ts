const initialState = {
    start: 1,
    stop: 5,
    toggle: false,
    reset: 1
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {


    switch (action.type) {
        case 'INC-VALUE': {
            return {
                ...state, start: action.value + 1
            }
        }
        case 'RESET-VALUE': {
            return {
                ...state, start: action.start
            }
        }
        case 'SET-VALUE-START': {
            return {
                ...state,
                start: action.value,
                reset: action.value
            }
        }
        case 'SET-VALUE-STOP': {
            return {
                ...state, stop: action.value
            }
        }
        case 'CHANGE-TOGGLE': {
            return {
                ...state, toggle: action.value
            }
        }


        default:
            return state
    }

}
type ActionType = IncValueType | ResetValueType | GetValueType | SetValueType | ToggleValueType

type IncValueType = ReturnType<typeof incValueAC>
type ToggleValueType = ReturnType<typeof toggleValueAC>
type ResetValueType = ReturnType<typeof resetValueAC>
type GetValueType = ReturnType<typeof getValueAC>
type SetValueType = ReturnType<typeof setValueStartAC> | ReturnType<typeof setValueStopAC>

export const incValueAC = (value: number) => ({type: 'INC-VALUE', value} as const)
export const resetValueAC = (start: number) => ({type: 'RESET-VALUE', start} as const)
export const getValueAC = () => ({type: 'GET-VALUE'} as const)
export const setValueStartAC = (value: number) => ({type: 'SET-VALUE-START', value} as const)
export const setValueStopAC = (value: number) => ({type: 'SET-VALUE-STOP', value} as const)
export const toggleValueAC = (value: boolean) => ({type: 'CHANGE-TOGGLE', value} as const)
