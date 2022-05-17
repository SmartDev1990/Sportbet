export function setOdds(odds){
    return {
        type: "SET_ODDS",
        payload: odds
    }
}

export function setUnFormattedOdds(unformattedOdds){
    return {
        type: "SET_UNFORMATTED_ODDS",
        payload: unformattedOdds
    }
}

export function setIsOddsLoadingFalse(){
    return {
        type: "SET_IS_ODDS_LOADING_False",
        payload: ""
    }
}

export function setOddsChanging(changingOdds){
    return {
        type: "SET_ODDS_CHANGING",
        payload: changingOdds
    }
}

export function setNewOdds(newOdds){
    return {
        type: "SET_NEW_ODDS",
        payload: newOdds
    }
}