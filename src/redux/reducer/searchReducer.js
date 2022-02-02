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

export const specificSearchReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_SPECIFIC_SEARCH:
            return {data: payload};

            default:
                return state
    }
}

export const errorReducer = (state = false, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_ERROR:
            return payload

            default:
                return state
    }
}
