import { ActionTypes } from "../constant/action-types"

export const FetchSearchData = (data) => {
    return{
    type: ActionTypes.FETCH_SEARCH_DATA,
    payload : data
    }

}

export const SetError = (error) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: error
    }
}
