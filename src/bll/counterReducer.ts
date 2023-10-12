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
        case 'SET-VALUE':{
            return {
                ...state, reset: action.value
            }
        }


        default:
            return state
    }

}
type ActionType = IncValueType | ResetValueType | GetValueType | SetValueType

type IncValueType = ReturnType<typeof incValueAC>
type ResetValueType = ReturnType<typeof resetValueAC>
type GetValueType = ReturnType<typeof getValueAC>
type SetValueType = ReturnType<typeof setValueAC>

export const incValueAC = (value: number) => ({type: 'INC-VALUE', value} as const )
export const resetValueAC = (start:number) => ({type: 'RESET-VALUE', start} as const )
export const getValueAC = () => ({type: 'GET-VALUE'} as const )
export const setValueAC = (value:number) => ({type: 'SET-VALUE', value} as const )
