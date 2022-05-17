export function setOddsFormat(oddsFormat){
    return {
        type: "SET_ODDS_FORMAT",
        payload: oddsFormat
    }  
}

export function setPreferUsername(userAddress,preferUsername){
    return {
        type: "SET_PREFER_USERNAME",
        payload: {[userAddress]:preferUsername}
    }
}

export function setPreferUsernameFlag(userAddress){
    return{
        type: "SET_PREFER_USERNAME_FLAG",
        payload: {[userAddress]:true}
    }
}

export function setPreferAvatarStyle(userAddress,preferAvatarStyle){
    return {
        type: "SET_PREFER_AVATAR_STYLE",
        payload: {[userAddress]:preferAvatarStyle}
    }
}

export function setDisconnected(disconnected){
    return{
        type: "SET_DISCONNECTED",
        payload: disconnected
    }
}

export function setBetSlipOpen(isBetSlipOpen){
    return {
        type: "SET_BETSLIP_OPEN",
        payload: isBetSlipOpen
    }
}

export function setFirstTimeBetButtonClicked(clicked){
    return {
        type: "SET_FIRST_TIME_BET_BUTTON_CLICKED",
        payload: clicked
    }
}