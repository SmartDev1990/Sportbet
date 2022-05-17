const accountReducer = (state = {
    settledBets: [],
    unsettledBets: [],


  }, action) => {
      switch (action.type) {
            case "SET_SETTLED_BETS":
                state = {
                    ...state,
                    settledBets: action.payload
                }   
                break;
            case "SET_UNSETTLED_BETS":
                state = {
                    ...state,
                    unsettledBets: action.payload
                }
                break;
        }
      return state;
  };

export default accountReducer;