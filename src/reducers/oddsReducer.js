const oddsReducer = (state = {
    oddsDict: {},
    unformattedOddsDict: {},
    isOddsLoading: true,
    oddsChanging: [],
    newOdds: []

  }, action) => {
      switch (action.type) {
            case "SET_ODDS":
                state = {
                    ...state,
                    oddsDict: action.payload
                }   
                break;
            case "SET_UNFORMATTED_ODDS":
                state = {
                    ...state,
                    unformattedOddsDict: action.payload
                }
                break;
            case "SET_IS_ODDS_LOADING_False":
                state = {
                    ...state,
                    isOddsLoading: false
                }
                break;
            case "SET_ODDS_CHANGING":
                state={
                    ...state,
                    oddsChanging: action.payload
                }
                break;
            case "SET_NEW_ODDS":
                state={
                    ...state,
                    newOdds: action.payload
                }
                break;
        }
      return state;
  };

export default oddsReducer;