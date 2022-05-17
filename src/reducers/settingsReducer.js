const settingsReducer = (state = {
    oddsFormat: "decimal",
    disconnected: true,
    preferUsername: {},
    preferUsernameFlag: {},
    preferAvatarStyle: {},
    isBetSlipOpen: false,
    firstTimeBetButtonClicked: false
  }, action) => {
      switch (action.type) {
            case "SET_ODDS_FORMAT":
                state = {
                    ...state,
                    oddsFormat: action.payload
                }   
                break;
            case "SET_PREFER_USERNAME":
                state ={
                    ...state,
                    preferUsername: Object.assign({},state.preferUsername,action.payload)
                }
                break;
            case "SET_PREFER_USERNAME_FLAG":
                state ={
                    ...state,
                    preferUsernameFlag: Object.assign({},state.preferUsernameFlag,action.payload)
                }
                break;
            case "SET_PREFER_AVATAR_STYLE":
                state = {
                    ...state,
                    preferAvatarStyle: Object.assign({},state.preferAvatarStyle,action.payload)
                }
                break;
            case "SET_DISCONNECTED":
                state = {
                    ...state,
                    disconnected: action.payload
                }
                break;
            case "SET_BETSLIP_OPEN":
                state = {
                    ...state,
                    isBetSlipOpen: action.payload
                }
                break;
            case "SET_FIRST_TIME_BET_BUTTON_CLICKED":
                state = {
                    ...state,
                    firstTimeBetButtonClicked: action.payload
                }
                break;
      }
      return state;
  };

export default settingsReducer;