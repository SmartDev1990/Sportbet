export function setSettledBets(value){
    return {
        type: "SET_SETTLED_BETS",
        payload: value
    }
}

export function setUnsettledBets(value){
    return {
        type: "SET_UNSETTLED_BETS",
        payload: value
    }
}