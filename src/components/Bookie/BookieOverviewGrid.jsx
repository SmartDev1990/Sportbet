import { Box, Paper, Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { BookieOverviewCard } from '@components/Bookie/BookieOverviewCard';
import { BookieOverviewChart } from '@components/Bookie/BookieOverviewChart';
import { BookieYieldsChart } from '@components/Bookie/BookieYieldsChart';
import { getPoolLiquidity } from "@utils/web3Provider";

const card1style = {
    card_bg_color: "rgb(30, 136, 229)",
    card_second_color: "rgb(21, 101, 192)",
    card_title: "Total Liquidity",
    card_number: "$379,273" ,
    card_icon: "/static/images/account/gold_coin.png",
}


const card2style = {
    card_bg_color: "rgb(94, 53, 177)",
    card_second_color: "rgb(69, 39, 160)",
    card_title: "Est. Next Payout (in DAI)",
    card_number: "$218" ,
    card_icon: "/static/images/footer_icons/DAIIcon.png",
}

const card3style = {
    card_bg_color: "rgb(139, 195, 74)",
    card_second_color: "rgb(76, 175, 80)",
    card_title: "Staking Yield (this month)",
    card_number: "15%" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/1170/1170611.png",
}

const card4style = {
    card_bg_color: "rgb(255, 172, 62)",
    card_second_color: "rgb(255, 152, 0)",
    card_title: "Staking Yield (this year)",
    card_number: "38%" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/394/394631.png",
}

const card5style = {
    card_bg_color: "rgb(255, 62, 62)",
    card_second_color: "rgb(255, 13, 0)",
    card_title: "Total Payouts (this month)",
    card_number: "$4,734" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/1170/1170611.png",
}

const card6style = {
    card_bg_color: "rgb(74, 185, 195)",
    card_second_color: "rgb(76, 125, 175)",
    card_title: "Total Payouts (this year)",
    card_number: "$13,485" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/1170/1170611.png",
}

const gridSpacing = 3;

export const BookieOverviewGrid = (props) => {

  return (
	<Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card1style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card2style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card3style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card4style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card5style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <BookieOverviewCard card_style={card6style}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                        <BookieOverviewChart/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                        <BookieYieldsChart/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
)};


