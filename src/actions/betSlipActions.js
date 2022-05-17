export function addBetSlipOutcome(outcomeID){
    return {
        type: "ADD_BET_SLIP_OUTCOME",
        payload: outcomeID
    }
}

export function removeBetSlipOutcome(outcomeID){
    return {
        type: "REMOVE_BET_SLIP_OUTCOME",
        payload: outcomeID
    }
}

export function removeAllBetSlipOutcomes(){
    return{
        type: "REMOVE_ALL_BEST_SLIP_OUTCOMES",
        payload: ""
    }
}

export function setBetAmount(betAmount){
    return{
        type: "SET_BET_AMOUNT",
        payload: betAmount
    }
}