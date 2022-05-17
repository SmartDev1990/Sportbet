const bookieReducer = (state = {
    liqDisplayValue: 0,
    balanceHoldValue: 0,
    withdrawableValue: 0,
    userStakeValue: 0


  }, action) => {
      switch (action.type) {
            case "SET_LIQ_DISPLAY_VALUE":
                state = {
                    ...state,
                    liqDisplayValue: action.payload
                }   
                break;
            case "SET_BALANCE_HOLD_VALUE":
                state = {
                    ...state,
                    balanceHoldValue: action.payload
                }
                break;
            case "SET_WITHDRAWABLE_VALUE":
                state = {
                    ...state,
                    withdrawableValue: action.payload
                }
                break;
            case "SET_USER_STAKE_VALUE":
                state = {
                    ...state,
                    userStakeValue: action.payload
                }
                break;
        }
      return state;
  };

export default bookieReducer;