import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "@utils/create-emotion-cache";
import { theme } from "@styles/theme";
import "@styles/globals.css";
import { Loader } from "@components/Dashboard/Loader";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import Script from "next/script"
import {getMatches} from "@utils/web3Provider";
import Web3 from 'web3';

// New redux dependencies
import { Provider } from "react-redux";
import {persistor,store} from "../store";
import { PersistGate } from 'redux-persist/integration/react'
import { MARKET_ABI, MARKET_ADDY} from "../config"
import {setOddsChanging,setNewOdds} from "@actions/oddsActions"

// Setting odds, and store them into redux
import { getOdds } from "@utils/getOdds" 

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    async function asyncUseEffectFunction() {
      let data = await getMatches();
      getOdds(data);
    }
    asyncUseEffectFunction();
    let web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:8545'))
    let contract = new web3.eth.Contract(MARKET_ABI, MARKET_ADDY);

    contract.events.allEvents()
      .on('data', async (event) => {
        if (event['event'] == 'updateOdds_Event'){
          let data = await getMatches();
          getOdds(data);
          let newOdds = event['returnValues'][1].map((item)=>{
            return Number(item)/1000
          })
          console.log(event['returnValues'][0]); //market id
          console.log(event['returnValues'][1]); //new odds
          store.dispatch(setOddsChanging(
            [
              event['returnValues'][0]
            ]
          ))
          store.dispatch(setNewOdds(
            newOdds
          ))
        }
      })
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Decentralized Sportsbook</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
        <NextNProgress color="#34b8ff" />
          {getLayout(<Component {...pageProps} />)}
        </PersistGate>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
