import Head from "next/head";
import { Box } from "@mui/material";
import { DashboardLayout } from "@components/DashboardLayout";
import { Leaderboard } from "@components/Dashboard/Leaderboard";

// Redux Dependencies
import {connect} from "react-redux"
import { setBetSlipOpen } from "@actions/settingsActions";

const Dashboard = (props) => 
{
    
    return (
    <>
    <Head>
        <title>Leaderboard | OpenEdge</title>
        <style ></style>
    </Head>
    <Box sx={{textAlign:'center',alignItems:'center',alignContent:'center',justifyContent:'center',paddingTop:'50px'}}>
    <Leaderboard/>
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
