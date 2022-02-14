const reducer = (state = 0, action) => {
    if (action.type === 'DEPOSIT_MONEY') {
        return state + action.payload
    } else if (action.type === 'WITHDRAW_MONEY') {
        return state - action.payload
    } else {
        return state
    }
}

export default reducer;