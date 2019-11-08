import { LAUNCH_LOADING, LAUNCH_SUCCESS, LAUNCH_FAILED } from "./../actions/actions";


export const initialState = {
    launches: [],
    error: null,
    isLoading: false
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAUNCH_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case LAUNCH_SUCCESS:
            return {
                ...state,
                launches: action.payload,
                isLoading: false,
                error: null
            };
        case LAUNCH_FAILED:
            return {
                ...state,
                launches: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default appReducer;