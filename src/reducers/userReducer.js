const oddsReducer = (state = {
    userAddress: null,
    web3: null,
    contract: null,
    provider: null,
    web3Loading: true,
    loggedIn: false,
    hasWeb3: false,
    hasProvider: false,
    balance: 0,
    currentNetWork: ""
  }, action) => {
      switch (action.type) {
            case "LOG_IN":
                state = {
                    ...state,
                    userAddress : action.payload,
                    loggedIn: true,
                    }   
                    break;
                case "LOG_OUT":
                    state = {
                        ...state,
                        userAddress : "",
                        loggedIn: false,
                        provider: {},
                        web3: {},
                    }   
                    break;
                case "SET_WEB3":
                    state = {
                        ...state,
                        web3: action.payload
                    }
                    break;
                 case "SET_PROVIDER":
                state = {
                    ...state,
                    provider: action.payload
                    }
                    break;
                case "SET_WEB3_LOADING":
                    state = {
                        ...state,
                        web3Loading: action.payload
                    }
                    break;
                case "SET_HAS_WEB3_TRUE":
                    state = {
                        ...state,
                        hasWeb3: true
                    }
                    break;
                case "SET_HAS_PROVIDER_TRUE":
                    state = {
                        ...state,
                        hasProvider: true
                    }
                    break;
                case "SET_BALANCE":
                    state = {
                        ...state,
                        balance: action.payload
                    }
                    break;
                case "SET_CURRENT_NETWORK":
                    state = {
                        ...state,
                        currentNetWork: action.payload
                    }
                    break;
      }
      return state;
  };

export default oddsReducer;