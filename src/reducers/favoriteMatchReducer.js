const favoriteMatchReducer = (state = {
    favoritedMatchArray: [],
  }, action) => {
      switch (action.type) {
            case "ADD_FAVORITE_MATCH":
                if(!state.favoritedMatchArray.includes(action.payload)){
                    state = {
                        ...state,
                        favoritedMatchArray: [...state.favoritedMatchArray, action.payload]
                    }
                }
                else
                {
                    state = {
                        ...state
                    }
                }
                break;
            case "REMOVE_FAVORITE_MATCH":
                let removeIndex = state.favoritedMatchArray.indexOf(action.payload);
                if(removeIndex !== -1){
                    state.favoritedMatchArray.splice(removeIndex,1);
                    state = {
                        ...state,
                        favoritedMatchArray: state.favoritedMatchArray
                    }
                }
                else{
                    state = {
                        ...state
                    }
                }
                break;
      }
      return state;
  };

export default favoriteMatchReducer;