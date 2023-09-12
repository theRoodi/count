const initialState = {
    start: 1
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state, start: state.start + 1
            }
        case 'SET-VALUE':
            return {
                ...state, start: action.value
            }
        case 'GET-VALUE':
            return {
                ...state
            }
        default:
            return state
    }


}
export const incValueAC = () => {
    return {type: 'INC-VALUE'} as const
}
export const setValueAC = (value: number) => {
    return {type: 'SET-VALUE', value} as const
}
export const getValueAC = () => {
    return {type: 'GET-VALUE'} as const
}

export type IncValueType = ReturnType<typeof incValueAC>
export type SetValueType = ReturnType<typeof setValueAC>
export type GetValueType = ReturnType<typeof getValueAC>

type ActionType = IncValueType | SetValueType | GetValueType