import {createStore,combineReducers,applyMiddleware} from "redux";

// Third party middlewares
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";

// Development Only
import logger from 'redux-logger';

// Custom reducers
import betSlipReducer from "@reducers/betSlipReducer";
import favoriteMatchReducer from "@reducers/favoriteMatchReducer";
import oddsReducer from "@reducers/oddsReducer";
import userReducer from "@reducers/userReducer";
import settingsReducer from "@reducers/settingsReducer";
import bookieReducer from "@reducers/bookieReducer";
import accountReducer from "@reducers/accountReducer";

// Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createTransform } from 'redux-persist';

// const store = createStore(
//     combineReducers({math: mathReducer, user: userReducer, favoriteMatch:favoriteMatchReducer,betSlip:betSlipReducer}),
//     {},
//     bindMiddleware(logger,thunk,promise)
// );

const transformCircular = 
  createTransform(
    (inboundState, key) => {
      return inboundState

    },
    (outboundState, key) => {
      if(key=="settings"){
        outboundState.isBetSlipOpen = false;
        outboundState.firstTimeBetButtonClicked = false;
      }

      return outboundState
    },
    { whitelist: ['settings'] }
  )

const persistConfig = {
  key: 'root',
  storage: storage,
  transforms: [transformCircular],
  blacklist: ['user','odds','bookie','account']
}

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
     // I require this only in dev environment
      const { composeWithDevTools } = require("redux-devtools-extension");
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };
  
export const makeStore = () => {
    const rootReducer = combineReducers({favoriteMatch:favoriteMatchReducer,betSlip:betSlipReducer,odds:oddsReducer,user:userReducer,settings:settingsReducer, bookie:bookieReducer,account:accountReducer});
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(
        persistedReducer,
        bindMiddleware([/*logger,*/thunk,promise])
    );
    let persistor = persistStore(store)
    return {persistor,store};
};

const {persistor,store} = makeStore();



export {persistor,store};