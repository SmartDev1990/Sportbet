export function addFavoriteMatch(matchId){
    return {
        type: "ADD_FAVORITE_MATCH",
        payload: matchId
    }
}

export function removeFavoriteMatch(matchId){
    return {
        type: "REMOVE_FAVORITE_MATCH",
        payload: matchId
    }
}