import { DashboardLayout } from "@components/DashboardLayout";
import { Box, Button, Tab, Tabs, Typography, Grid,Container } from "@mui/material";
import Head from "next/head";
import {connect} from "react-redux";
import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import MatchCard from "@components/Dashboard/MatchCard";
import { BetslipSideDrawerEmptyModal } from "@components/Dashboard/BetslipSideDrawerEmptyModal";
import  BetslipSideDrawer from "@components/Dashboard/BetslipSideDrawer";
import BottomBetSlipDrawer from "@components/Dashboard/BottomBetSlipDrawer";
import useWindowDimensions from '@hooks/useWindowDimension';

import { setBetSlipOpen } from "@actions/settingsActions";

const Favorite = (props) => 
{  
    const [routerReady,setRouterReady] = useState(false);
    const { height, width } = useWindowDimensions();
    const router = useRouter()

    useEffect(()=>{
        if(!router.isReady) return;

        setRouterReady(true)
    }, [router.isReady]);

    const odds =  props.odds.oddsDict;
    const favoriteGames = props.favoriteMatch.favoritedMatchArray;
    return (
        <>
        <Head>
            <title>Favorite Games | OpenBook</title>
        </Head>
        <Box
            component="main"
            sx={{
            flexGrow: 1,
            py: 8,
            display: 'flex'
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                {
                    favoriteGames.map((item,index)=>{
                        let match = odds[item];
                        let datetime = new Date(match.timestamp);
                        let dateStringForProps=datetime.toLocaleString('default', { month: 'short', day:'numeric' })
                        let timeStringForProps=datetime.toLocaleString('default', { hour: 'numeric', minute:'numeric',  hourCycle: 'h23' })
                        return(
                            <Grid key={match.id} item lg={6} sm={12} xl={4} xs={12}>
                                <MatchCard key={index}
                                match1={match.match[0]} 
                                match2={match.match[1]} 
                                outcomes={match.outcomes}
                                outcomesInUS={match.outcomesInUS}
                                outcomesInProb={match.outcomesInProb}
                                dateString={dateStringForProps}  
                                timeString={timeStringForProps}  
                                matchId={match.id}
                                ></MatchCard>
                            </Grid>

                        )
                    })
                }
                </Grid>     
            </Container>
            <BetslipSideDrawerEmptyModal setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}  />
            { width > 900 ?  <BetslipSideDrawer setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}/> : <BottomBetSlipDrawer setSlipOpen={props.setBetSlipOpen} isSlipOpened={props.settings.isBetSlipOpen}/>}
        </Box>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteMatch: state.favoriteMatch,
        odds: state.odds,
        settings: state.settings
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBetSlipOpen: (isBetSlipOpen) => {
            dispatch(setBetSlipOpen(isBetSlipOpen));
          },
    };
};


Favorite.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);