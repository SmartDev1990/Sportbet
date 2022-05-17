import { Box, Typography, Grid, Button, Card, CardContent, Skeleton } from '@mui/material';
import Image from 'next/image';

export const FiveStepsForBettor = (props) => {
    let styles = props.styles;
    return(
        <Box sx={{ backgroundColor: '#070044', textAlign: 'center', paddingTop: '50px', paddingBottom:'200px', px: '10%' }}>

            <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                <Typography sx={{ color: '#00ff66', marginBottom: '30px', fontSize: '32px' }}>
                    Betting on your favorite team and win easy money
                </Typography>

                <Typography className={styles.title}>
                    5 simple steps for sports betting
                </Typography>

                <Typography sx={{ color: '#e2e1ff', marginBottom: '30px', fontSize: '24px' }}>
                    Our platform has been designed from the ground up to be tailored to the unique form of betting and settlement offered by the blockchain. Follow these simple steps and make profits!
                </Typography>

            </Box>

            <Box>

                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bettor_step_1.png" />
                            <Box className={styles.stepCountRight}>01</Box>
                        </Box>


                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Login to MetaMask
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                            OpenBook is fully integrated with MetaMask, connected your MetaMask account to our app simply by clicking the 
                            <Button 
                                sx={{whiteSpace: 'nowrap',mx:'10px', fontSize:'16px', color:'white', backgroundColor:'#e57714','&:hover': {backgroundColor: '#ef882b',color:'white'}}} variant="contained">
                                Connect Wallet
                            </Button>
                         on the top right corner of the app. <br/><br/>By following this route over a traditional login approach, all Bettors and Bookies can remain anonymous to OpenBook. The only identification factor is the public wallet address one uses to make bets or provide liquidity.
                        </Typography>
                    </Grid>
                </Grid>

                <Box>
                    <Image src="/static/images/landing/right_arrow.png" layout="intrinsic" height="191" width="250"></Image>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Choose your bet
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        Once logged into MetaMask and connected to OpenBook, the Bettor must choose the bet or bets they’d like to make. For now, we offer only money line bets on all of our matches. The types of betting and their role in OpenBook are addressed in more detail in the following section. Choosing a bet and adding it to the Bettor’s bet slip is as easy as clicking on the box inside the correct match corresponding to the chosen side of the moneyline. Bets inside the bet slip have individual wager amount boxes to be filled out.
                        </Typography>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bettor_step_3.png" />
                            <Box className={styles.stepCountLeft}>02</Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box>
                    <Image src="/static/images/landing/left_arrow.png" layout="intrinsic" height="191" width="250"></Image>
                </Box>

                <Grid container spacing={3}>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bettor_step_4.png" />
                            <Box className={styles.stepCountRight}>03</Box>
                        </Box>
                    </Grid>


                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                             Place your bet
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                            As soon as the Bettor has filled their bet slip to satisfaction, placing a bet is a simple as clicking the “Place Bets” button. The bet or bets will need to be confirmed in the MetaMask pop ups, then an on-screen receipt will appear with the details of the transaction for the Bettor. As soon as the blockchain processes the transaction–blocktime on the Polygon network is roughly every 2 seconds, meaning this wait will hardly be noticeable under the worst conditions –the Bettor is sent their bet slip as an ERC-1155 token.
                        </Typography>
                    </Grid>
                </Grid>

                <Box>
                    <Image src="/static/images/landing/right_arrow.png" layout="intrinsic" height="191" width="250"></Image>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                             Wait and/or Watch the Game
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        Very little explanation is needed for this part; after confirming the transaction, the blockchain and our Providers take care of everything else on the back end. Until the outcome of the match is settled and confirmed by the Providers, all the Bettor needs to do is hope they won.
                        </Typography>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bettor_step_6.png" />
                            <Box className={styles.stepCountLeft}>04</Box>
                        </Box>

                    </Grid>
                </Grid>

                <Box>
                    <Image src="/static/images/landing/left_arrow.png" layout="intrinsic" height="191" width="250"></Image>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bettor_step_5.png" />
                            <Box className={styles.stepCountLeft}>05</Box>
                        </Box>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Collect your winning
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        After the Providers have settled the final outcome of a match, that information is shared with OpenBook. When the Bettor checks to see if they’ve won, our interface will refer to the Bettor’s wallet for bet slips and determine by slip ID# and metadata if each slip has won. If there are any unclaimed winnings on any bet slips in the Bettor’s wallet, there will be a button on the page to claim all winnings. After confirming to claim winnings, the ERC-1155 token receipt for all winning bet slips are checked for validity and then systematically burnt. After validation, the original bet amount and winnings are disbursed to the Bettor’s wallet, completing the process.
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

