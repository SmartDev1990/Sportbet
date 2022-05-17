import { AccountOverviewChart } from "@components/Account/AccountOverviewChart";
import { AccountOverviewList } from "@components/Account/AccountOverviewList";
import { Box, Button, Tab, Tabs, Typography, Grid } from "@mui/material";
import {AccountCard} from "@components/Account/AccountCard";

const card1style = {
    card_bg_color: "rgb(94, 53, 177)",
    card_second_color: "rgb(69, 39, 160)",
    card_title: "Total Winning",
    card_number: "1800.00 DAI" ,
    card_icon: "/static/images/account/gold_coin.png",
}

const card2style = {
    card_bg_color: "rgb(30, 136, 229)",
    card_second_color: "rgb(21, 101, 192)",
    card_title: "Win Ratio",
    card_number: "57%" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/1170/1170611.png",
}

const card3style = {
    card_bg_color: "rgb(255, 172, 62)",
    card_second_color: "rgb(255, 152, 0)",
    card_title: "Rank",
    card_number: "#1" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/3629/3629625.png",
}

const card4style = {
    card_bg_color: "rgb(139, 195, 74)",
    card_second_color: "rgb(76, 175, 80)",
    card_title: "Current Winning Streak",
    card_number: "3" ,
    card_icon: "https://cdn-icons-png.flaticon.com/512/394/394631.png",
}

const gridSpacing = 3;

export const Overview = (props) => {

    return(
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <AccountCard card_style={card1style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <AccountCard card_style={card2style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <AccountCard card_style={card3style}/>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                        <AccountCard card_style={card4style}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                        <AccountOverviewChart/>
                    </Grid>
                    <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                        <AccountOverviewList/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}