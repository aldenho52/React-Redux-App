import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    countries: [],
    global: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                countries: action.payload.Countries,
                global: action.payload.Global,
                isLoading: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
