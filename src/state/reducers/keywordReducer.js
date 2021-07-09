const initialState = {
    searchKeyword: 'batman',
    submitKeyword: 'batman'
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_SEARCH_KEYWORD':
            return { ...state, searchKeyword: action.payload };

        case 'SET_SUBMIT_KEYWORD':
            return { ...state, submitKeyword: action.payload };

        default:
            return state;
    }
}

export default reducer;