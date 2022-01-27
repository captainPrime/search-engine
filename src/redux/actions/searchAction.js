import { ActionTypes } from "../constant/action-types"

export const FetchSearchData = (data) => {
    return{
    type: ActionTypes.FETCH_SEARCH_DATA,
    payload : data
    }

}
