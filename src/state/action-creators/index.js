export const setSearchKeyword = (keyword) => {
    return (dispatch) => {
        dispatch({ type: "SET_SEARCH_KEYWORD", payload: keyword })
    }
}

export const setSubmitKeyword = (keyword) => {
    return (dispatch) => {
        dispatch({ type: "SET_SUBMIT_KEYWORD", payload: keyword });
    }
}