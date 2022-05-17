import styles from "@styles/landing.module.css";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LandingFooterDivider } from "@components/Landing/LandingFooterDivider";
import Head from "next/head";

//Landing Structures
import { NavBar } from "@components/Landing/NavBar";
import { HeroBanner } from "@components/Landing/HeroBanner";
import { Features } from "@components/Landing/Features";
import  ChangingDevice from '@components/Landing/ChangingDevice';
import { FiveStepsToggle } from "@components/Landing/FiveStepsToggle";
import { FiveStepsForBettor } from "@components/Landing/FiveStepsForBettor";
import { FiveStepsForBookie } from "@components/Landing/FiveStepsForBookie";
import { FaqForLanding } from "@components/Landing/FaqForLanding";
import { Subscribe } from "@components/Landing/Subscribe";
import { LandingFooter } from "@components/Landing/LandingFooter";



const Dashboard = (props) => {
  const [fiveStepsTabState, setFiveStepsTabState] = useState("bettor");
  return (
    <>
      <Head>
          <title>OpenBook | Decentralized Betting Platform</title>
      </Head>
      <NavBar landingStyles={styles} />
      <HeroBanner styles={styles} />
      <Features styles={styles} />
      <Box className={styles.uniqueBox}>
        <Box sx={{display:'flex',flexDirection: 'column'}}>
          <Typography className={styles.subTitle}>
            Why is OpenBook better?
          </Typography>
          <Typography className={styles.title}>
            This is What You Get
          </Typography>
          <Typography className={styles.detailDescriptions3} style={{display:'100%'}}>
            OpenBook offersaa hybrid sportsbook model and why we think that we can solve so many of the seemingly easy but illusive issues with the growing sports betting industry. 
          </Typography>
        </Box>

        <Box sx={{py:'50px', display: 'flex',flexDirection: 'column',alignItems: 'flex-start',width: "50%"}}>
          <Box>
            <Box sx={{display:'flex',flexDirection: 'row'}}>
              <Image src="/static/images/landing/why_we_unique_1.png" height={80} width={80} layout="fixed"/>
              <Box sx={{display:'flex',flexDirection:"column",marginLeft:'20px'}}>
                <Typography sx={{fontSize:'32px',color:'white',textAlign:'left',fontWeight:'500'}}>Single Liquidity Pool</Typography>
                <Typography sx={{frontSize:'18px',color:'white',textAlign:'left'}}>The OpenBook sportsbook protocol uses a singular liquidity pool to serve all bets, which allows much higher betting limit. </Typography>
              </Box>
            </Box>
            <LandingFooterDivider />
          </Box>
          <Box>
            <Box sx={{display:'flex',flexDirection: 'row'}}>
              <Image src="/static/images/landing/why_we_unique_2.png" height={80} width={80} layout="fixed"/>
              <Box sx={{display:'flex',flexDirection:"column",marginLeft:'20px'}}>
                <Typography sx={{fontSize:'32px',color:'white',textAlign:'left',fontWeight:'500'}}>No deposit required</Typography>
                <Typography sx={{frontSize:'18px',color:'white',textAlign:'left'}}>Unlike other betting platform, OpenBook reuiqres no initial deposit. Bet on any game using DAI straight from you wallet. </Typography>
              </Box>
            </Box>
            <LandingFooterDivider />
          </Box>
          <Box>
            <Box sx={{display:'flex',flexDirection: 'row'}}>
            <Image src="/static/images/landing/why_we_unique_3.png" height={80} width={80} layout="fixed"/>
              <Box sx={{display:'flex',flexDirection:"column",marginLeft:'20px'}}>
                <Typography sx={{fontSize:'32px',color:'white',textAlign:'left',fontWeight:'500'}}>Polygon based</Typography>
                <Typography sx={{frontSize:'18px',color:'white',textAlign:'left'}}>Polygon blockchain is one of the fastest growing blockchains; it offers fast block mining speed, low gas cost and secure transactions.</Typography>
              </Box>
            </Box>
            <LandingFooterDivider />
          </Box>
          <Box>
            <Box sx={{display:'flex',flexDirection: 'row'}}>
            <Image src="/static/images/landing/why_we_unique_6.png" height={80} width={80} layout="fixed"/>
              <Box sx={{display:'flex',flexDirection:"column",marginLeft:'20px'}}>
                <Typography sx={{fontSize:'32px',color:'white',textAlign:'left',fontWeight:'500'}}>No user details needed</Typography>
                <Typography sx={{frontSize:'18px',color:'white',textAlign:'left'}}>By facilitating bets with DAI transferred from self-custodial MetaMask wallets, OpenBook is entirely blind to Bettor identities. </Typography>
              </Box>
            </Box>
            <LandingFooterDivider />
          </Box>
          <Box>
            <Box sx={{display:'flex',flexDirection: 'row'}}>
            <Image src="/static/images/landing/why_we_unique_4.png" height={80} width={80} layout="fixed"/>
              <Box sx={{display:'flex',flexDirection:"column",marginLeft:'20px'}}>
                <Typography sx={{fontSize:'32px',color:'white',textAlign:'left',fontWeight:'500'}}>Be the bookie</Typography>
                <Typography sx={{frontSize:'18px',color:'white',textAlign:'left'}}>Not only you can be the bettor on OpenBook, you can also be the bookie by staking DAI coins into our liquidiuty pool and earn stable APR.</Typography>
              </Box>
            </Box>
            <LandingFooterDivider />
          </Box>
        </Box>
      </Box>

      <Box className={styles.waveTransition3}/>

      <Box className={styles.responsiveBox}>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Typography className={styles.subTitle}>
            Fully Reponsive
          </Typography>
          <Typography className={styles.title}>
            OpenBook is Designed For All Plaforms
          </Typography>
          <Typography className={styles.detailDescriptions2}>
            Invest and bet on any plaform you like, phones, laptops, ipads, desktops.
          </Typography>
        </Box>
        <Box sx={{pt:'100px',pb:'00px',display:'flex','alignItems':'center',justifyContent: 'center',minHeight:'400px'}}>
          <ChangingDevice/>
        </Box>
      </Box>

      <Box className={styles.waveTransition4}/>

      <FiveStepsToggle
        styles={styles}
        fiveStepsTabState={fiveStepsTabState}
        setFiveStepsTabState={setFiveStepsTabState}
      />
      {fiveStepsTabState == "bettor" ? (
        <FiveStepsForBettor
          styles={styles}
          fiveStepsTabState={fiveStepsTabState}
        />
      ) : (
        <FiveStepsForBookie
          styles={styles}
          fiveStepsTabState={fiveStepsTabState}
        />
      )}

      <FaqForLanding landingStyles={styles}></FaqForLanding>
      <Subscribe styles={styles} />
      <LandingFooter />
    </>
  );
};

export default Dashboard;
