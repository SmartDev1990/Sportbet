import Head from "next/head";
import { Box } from "@mui/material";
import { DashboardLayout } from "@components/DashboardLayout";
import { SportsBookPage } from "@components/Dashboard/SportsBookPage";
import { BetslipSideDrawerEmptyModal } from "@components/Dashboard/BetslipSideDrawerEmptyModal";
import BottomBetSlipDrawer from "@components/Dashboard/BottomBetSlipDrawer";
import  BetslipSideDrawer from "@components/Dashboard/BetslipSideDrawer";
import { useState, useEffect, useMemo} from "react";
import {useRouter} from 'next/router';
import { SportsBookPageSkeleton } from "@components/Dashboard/SportsBookPageSkeleton";
import useWindowDimensions from '@hooks/useWindowDimension';

// Redux Dependencies
import {connect} from "react-redux"
import { setBetSlipOpen } from "@actions/settingsActions";

const Dashboard = (props) => 
{
    const [routerReady,setRouterReady] = useState(false);
    const [league_data,setLeagueData] = useState(null);
    const { height, width } = useWindowDimensions();

    const router = useRouter()


    useEffect(()=>{
        if(!router.isReady) return;

        setRouterReady(true)
    }, [router.isReady]);

        
    // let league_data = {};
    // league_data = data[sport][league]
    let league = null;
    let sport = null;
    sport = router.query.sport;
    league = router.query.league;
;

    useEffect(()=>{
        if(props.odds.isOddsLoading)
            return
        setLeagueData(props.odds.unformattedOddsDict[sport][league])
        // console.log(props.odds.unformattedOddsDict[sport][league])
    },[props.odds.isOddsLoading,router.asPath])

    return (
    <>
    <Head>
        <title>{sport} | {league} | Betting | OpenBook</title>
    </Head>
        
        <Box
            component="main"
            sx={{
            flexGrow: 1,
            py: 8,
            display: 'flex'
            }}
        > 
            {(routerReady && !props.odds.isOddsLoading && league_data) ? 
            <>
                <SportsBookPage EPL_data={league_data}/>
                <BetslipSideDrawerEmptyModal setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}  />
                { width > 900 ?  <BetslipSideDrawer setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}/> : <BottomBetSlipDrawer setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}/>}
            </>
            :<SportsBookPageSkeleton/>}
            
        </Box>
    </>
)};

const mapStateToProps = (state) => {
    return{
        odds: state.odds,
        settings: state.settings
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setBetSlipOpen: (isBetSlipOpen) => {
            dispatch(setBetSlipOpen(isBetSlipOpen));
          },
    };
};


Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
