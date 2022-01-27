import {ActionTypes} from "../constant/action-types"
const initialState = {
    data: []
}

export const searchReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.FETCH_SEARCH_DATA:
            return {...state, data: payload};

            default:
                return state
    }
}
