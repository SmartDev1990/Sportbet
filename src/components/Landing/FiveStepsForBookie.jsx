import { Box, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';

export const FiveStepsForBookie = (props) => {
    let styles = props.styles;
    return(
        <Box sx={{ backgroundColor: '#070044', textAlign: 'center', paddingTop: '50px', paddingBottom:'200px', px: '10%' }}>

            <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                <Typography sx={{ color: '#00ff66', marginBottom: '30px', fontSize: '32px' }}>
                    Become a bookie and earn money
                </Typography>

                <Typography className={styles.title}>
                    5 simple steps to become a bookie
                </Typography>

                <Typography sx={{ color: '#e2e1ff', marginBottom: '30px', fontSize: '24px' }}>
                    Pay less fees when betting and win more
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
                            Navigate to the Bookie Side
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        Just as straightforward as it is on the betting side, this step only requires the prospective Bookie to click their way to the Bookie side of OpenBook in our web interface. On the Bookie side, there are only a few pages and shuffling through them is useful for all OpenBook users. One of these pages has buttons to stake DAI in our Liquidity Pool. This is the page where Bookies will add and withdraw their stake in the pool.
                        </Typography>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bookie_step_2.png" />
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
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bookie_step_3.png"/>
                            <Box className={styles.stepCountRight}>03</Box>
                        </Box>
                    </Grid>


                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Stake Funds in our Liquidity Pool
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                            Staking, providing liquidity, and becoming a Bookie are all for the most part synonymous at OpenBook. Simply input the amount to stake, and click the “Stake DAI” button! The transaction confirmations will appear in MetaMask just like when placing bets. After the transaction is confirmed, the protocol will send the new Bookie a one-to-one amount of ERC-1155 token to DAI staked. We’ll refer to these tokens as OpenBook Stake Tokens from now on. 
                        </Typography>
                    </Grid>
                </Grid>

                <Box>
                    <Image src="/static/images/landing/right_arrow.png" layout="intrinsic" height="191" width="250"></Image>
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Monitor Profits & Pool Growth
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        Possessing the OpenBook Stake Tokens in their MetaMask wallet, Bookies at any time can return to the Bookie side pages and check on things. The state of the OpenBook Liquidity Pool is all open data on the blockchain, so we have built a simple interface to visualize these stats. The growth of the pool and the profits for the Bookie can be monitored with ease.
                        </Typography>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '0px !important' }}>
                        <Box sx={{ position: 'relative', width: 'fit-content' }}>
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bookie_step_4.png"/>
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
                            <Image layout="intrinsic" height="407" width="407" src="/static/images/landing/bookie_step_5.png"/>
                            <Box className={styles.stepCountLeft}>05</Box>
                        </Box>
                    </Grid>

                    <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ textAlign: 'left', alignSelf: 'center' }} >
                        <Typography sx={{ fontWeight: '700', marginBottom: '16px', color: 'white', fontSize: '43px' }}>
                            Withdraw Anytime 
                        </Typography>
                        <Typography sx={{ fontWeight: '400', marginBottom: '16px', color: 'white', fontSize: '18px', width: '80%' }}>
                        On the same page that allows staking, any amount of DAI the Bookie currently has staked can be withdrawn just as smoothly. Type in the amount to withdraw, and click to withdraw! Confirm the MetaMask transactions, and in moments the DAI will return to the Bookie’s wallet.
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

