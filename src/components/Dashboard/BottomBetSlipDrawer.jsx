import PropTypes from "prop-types";
import {IoTrashBinSharp,IoTicketOutline,IoCashOutline,IoTicket} from 'react-icons/io5';
import {FaRegTimesCircle} from 'react-icons/fa';
import { CgArrowDownR } from "react-icons/cg";
import styles from '@styles/BottomBetslipSideDrawer.module.css';
import {BetSlipEmpty} from "@components/Dashboard/BetSlipEmpty";
import {useState,useEffect, Fragment} from 'react';
import {DeleteAllMatchesInBetSlipModal} from "@components/Dashboard/DeleteAllMatchesInBetSlipModal"
import {Box,List,Tabs,Tab,Input,Typography,useMediaQuery, Button} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {ConnectButton} from "@components/Dashboard/ConnectButton";
import {connectMetaMask} from "@utils/web3Provider";
import { InstallMetaMaskButton } from "@components/Dashboard/InstallMetaMaskButton";
import {makeBet} from "@utils/web3Provider";
import {BetConfirmPopup} from "@components/Dashboard/BetConfirmPopup";


// Redux Dependencies
import {connect} from "react-redux";
import {addBetSlipOutcome,removeBetSlipOutcome, removeAllBetSlipOutcomes, setBetAmount} from '@actions/betSlipActions';
import {setDisconnected} from "@actions/settingsActions"


let globalOrderReceiptArr = [];
let globalTotalBet = 0;
let globalTotalPossiblePayout = 0;

const BottomBetslipSideDrawer = (props) => {
    let totalPossiblePayoutDict = {};
    let orderReceiptArr = [];
    let totalBet = 0;
    let totalPossiblePayout = 0;



    /* Delete all matches in slip confirm modal properties */
    const [delteAllModalOpen, setdelteAllModalOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    const handleClickOpen = () => {
        setdelteAllModalOpen(true);
      };

      const handleClose = () => {
        setdelteAllModalOpen(false);
      };  

    // Confirm bets modal properties
    const [confirmBetModalOpen, setConfirmBetModalOpen] = useState(false);
    const [confirmModalResult,setConfirmModalResult] = useState("LOADING")
    
    const handleconfirmBetModalOpen = () => {
        setConfirmBetModalOpen(true);
      };

    const handleconfirmBetModalClose = () => {
        setConfirmBetModalOpen(false);
    };     



    // Slip tabs for different betting schemes properties */
    const [tabsValue, setTabsValue] = useState("Single Bet");

    const handleChange = (event, newValue) => {
        setTabsValue(newValue);
      };

    // Opening Slip Properties
    const anchor = 'bottom';

    const [slipState, setSlipState] = useState({
        right: false,
        bottom: false
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        setSlipState({ ...slipState, [anchor]: open });
    };

    // Bet/match input properties, the input is captured every 0.2 second
    const [betInputQuery, setBetInputQuery] = useState({});

    const validateInputOnKeyPress = (event) => {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31 
          && (charCode < 48 || charCode > 57))
           event.preventDefault();
    }

    const validateInputOnChange = (event,matchId) => {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        if(Number.isNaN(Number(event.target.value))){
            event.target.value = "";
        }
        let newBetInputQuery = {...betInputQuery,[matchId]:event.target.value}
        setBetInputQuery(newBetInputQuery);
    }

    // useEffect(() => {
    //     const timeOutId = setTimeout(() => props.setBetAmount(betInputQuery), 200);
    //     return () => clearTimeout(timeOutId);
    //   }, [betInputQuery]);

    // Helper function for checking betSlipOutcomeArray is empty or not
    const isBetSlipEmpty = () =>{
        return props.betSlip.betSlipOutcomeArray.length == 0
    }

    //Helper function for setting max bet
    const setMaxBet = () => {
        // let gamesInBetSlip = props.betSlip.betSlipOutcomeArray;
        // if(gamesInBetSlip.length == 0)
        //     return;
        // let balance = props.user.balance;
        // let betEachGame = (Number(balance) / Number(gamesInBetSlip.length)).toFixed(2);
        // setBetInputQuery(betEachGame)
    }

    const setBet = (value) =>{
        let newBetInputQuery = {}
        Object.keys(betInputQuery).map((item,index)=>{
            newBetInputQuery[item] = value;
        })
        setBetInputQuery(newBetInputQuery);
        
    }

    const clearAllBets = () => {
        setBetInputQuery({});
    }

    const setBetToZero = (matchId) =>{
        setBetInputQuery({
            ...betInputQuery,
            [matchId]: null
        })
    }

    const placeBet = async () =>{

        let matchIds = [];
        let outcomes = [];
        let stakes = [];

        orderReceiptArr.map((item)=>{
            matchIds.push(item.match_id)
            item.outcome_id == 'X' ? outcomes.push(0) : outcomes.push(Number(item.outcome_id))
            stakes.push(item.stake)
        })

        
        let betResult = await makeBet(matchIds, outcomes, stakes);  
        setConfirmBetModalOpen(true);  
        if(betResult)
        {
            globalOrderReceiptArr = orderReceiptArr;
            globalTotalPossiblePayout = totalPossiblePayout;
            globalTotalBet = totalBet;
            clearAllBets();
            props.removeAllBetSlipOutcomes();
            setConfirmModalResult("SUCCESS")
        }
        else{
            setConfirmModalResult("FAIL")
        }
    }

    const list = (anchor) => (
        <Box
            className={`${styles.slip} ${props.isSlipOpened ? styles.slipOpen : styles.slipClose}`}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        <CgArrowDownR className={`${styles.slipArrow} ${props.isSlipOpened ? styles.slipArrowOpen : styles.slipArrowClosed}`} onClick={()=>(props.setSlipOpen(!props.isSlipOpened))}/>
        
            <Box className={styles.slipTopIconBlackBox}>
                <IoTicketOutline className={styles.ticketIcon}/>
                Bet Slip
            </Box>
            { isBetSlipEmpty() ? <BetSlipEmpty /> : 
            
            <Box>
                <Box className={styles.slipTabsOutterBox}>
                    <Box className={styles.slipTabsTrashBinBox}>
                        <IoTrashBinSharp className={styles.trashBin} onClick={handleClickOpen}/>
                        <DeleteAllMatchesInBetSlipModal fullScreen={fullScreen} open={delteAllModalOpen} handleClose={handleClose} removeAllBetSlipOutcomes={props.removeAllBetSlipOutcomes} clearAllBets={clearAllBets}/>
                    </Box>
                    <Box sx={{display:'flex',width:"100%",justifyContent:"center"}}>
                        <Tabs
                            value={tabsValue}
                            onChange={handleChange}
                            TabIndicatorProps={{style: {backgroundColor: "white"}}}
                            
                        >
                            <Tab key={1} value="Single Bet"  label="Single Bet" sx={{fontSize:'14px',padding:'0px'}}/>
                            <Tab disabled={true} key={2} value="Paylay" label="Parlay" sx={{fontSize:'14px',padding:'0px'}}/>
                            <Tab disabled={true} key={3} value="Others" label="Others" sx={{fontSize:'14px',padding:'0px'}}/>
                        </Tabs>
                    </Box>

                </Box>
                <Box className={styles.boxBeforeBetSlipSelectedMatchBox}/>
                <Box className={styles.betSlipSelectedMatchBox}>
                    <List sx={{paddingBottom:'0px'}}>
                    {props.betSlip.betSlipOutcomeArray.map((text, index) => {
                        
                        let matchId = text.split('/')[0];
                        let outcomeId = text.split('/')[1];

                        let winningOdds = props.odds.oddsDict[matchId]['outcomes'][outcomeId];
                        let displayOutcome = "";
                        switch (outcomeId){
                            case '1':
                                displayOutcome = props.odds.oddsDict[matchId]['match'][0];
                            break;
                            case 'X':
                                displayOutcome = "DRAW";
                            break;
                            case '2':
                                displayOutcome = props.odds.oddsDict[matchId]['match'][1];
                            break;
                        }

                        if ( typeof(betInputQuery[matchId]) === "undefined" || betInputQuery[matchId] === null ) {
                            setBetInputQuery({
                                ...betInputQuery,
                                [matchId]:Number(30).toFixed(2)
                            })
                        }
                        let possiblePayOut = (Number(winningOdds) * Number(betInputQuery[matchId])).toFixed(2);
                        totalPossiblePayoutDict = {...totalPossiblePayoutDict,[matchId]:possiblePayOut}
                        orderReceiptArr.push(
                            {
                                match_id: matchId,
                                game_time : props.odds.oddsDict[matchId]['timestamp'],
                                game : `${props.odds.oddsDict[matchId]['match'][0]} vs. ${props.odds.oddsDict[matchId]['match'][1]}`,
                                outcome_id: outcomeId,
                                bet : displayOutcome,
                                stake : Number(betInputQuery[matchId]),
                                odds : winningOdds,
                                possible_return : possiblePayOut
                            }
                        )
                        totalBet = Object.values(betInputQuery).reduce((accmulator,item)=>{return Number(accmulator) +  Number(item)},0).toFixed(2)
                        
                        totalPossiblePayout = Object.values(totalPossiblePayoutDict).reduce((accumulator,item)=>{return Number(accumulator) + Number(item)},0).toFixed(2)


                        return (
                        <Box key={index} 
                            sx={{height:'auto',width:'100%',backgroundColor:'white',borderBottom:'1px solid #d9d9d9',paddingTop:'5px',paddingBottom:'5px'}}>
                            <Box sx={{height:'fit-content',backgroundColor:'white',paddingBottom:'10px',paddingTop:'10px',display:'flex',textAlign:'center'}}>
                                <Box sx={{width:'50px',height:'100%'}}>
                                    <FaRegTimesCircle  className={styles.singleTicketDelete} onClick={()=>{setBetToZero(matchId);props.removeBetSlipOutcome(props.betSlip.betSlipOutcomeArray[index])}} />
                                </Box>
                                <Box sx={{display:'flex',width: '100%',justifyContent: 'space-between'}}>
                                    <Box sx={{backgroundColor:'white',height:'100%',width:'100%'}}>
                                        <Box sx={{display:'flex'}}>
                                            <Typography sx={{color:'black',textAlign:'left',fontSize:'13px',fontWeight:'400',marginRight:'10px'}}>Full-time result: </Typography>
                                            <Typography sx={{color:'black',textAlign:'center',fontSize:'13px',fontWeight:'600'}}>{displayOutcome}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{color:'#555',textAlign:'left',fontSize:'11px',fontWeight:'400'}}>{props.odds.oddsDict[matchId]['match'][0]} vs. {props.odds.oddsDict[matchId]['match'][1]}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{width:'50%',marginLeft:'0px',height:'100%',textAlign: 'center'}}>
                                    <Typography sx={{color:'black',textAlign:'left',fontSize:'15px',fontWeight:'700',textAlign:'center',display: 'inline-block',verticalAlign: 'middle',lineHeight: 'normal'}}>{winningOdds}</Typography>
                                    </Box>

                                </Box>

                            </Box>
                            <Box sx={{display:'flex'}}>
                            <Box sx={{width:'fit-content',height:'44px',textAlign:'center',borderRadius:'5px',backgroundColor:'#f1f1f1',display:'flex',justifyContent: 'center',alignContent:'center',alignItems:'center',px:'20px',my:"7px",width: '80%',marginLeft: '45px'}}>
                                <Typography sx={{color:'black',textAlign:'left',fontSize:'medium',fontWeight:'500'}}>Bet:</Typography>
                                <Box sx={{width:'120px',height:'100%',mx:'15px'}}>
                                <Input id="totalBetInput" 
                                aria-describedby="my-helper-text" 
                                value={betInputQuery[matchId]} placeholder="30.00"  
                                onChange={event => validateInputOnChange(event,matchId)} 
                                inputProps={{min: 0, style: { textAlign: 'center', fontSize:'16px',fontWeight:'700' }}} 
                                onKeyPress={(event) => validateInputOnKeyPress(event)}
                                />
                                </Box>
                                <Typography sx={{color:'black',textAlign:'left',fontSize:'medium',fontWeight:'700'}}>DAI</Typography>
                            </Box>
                            </Box>
                            <Box sx={{height:'fit-content', backgroundColor:'white',display:'flex',textAlign:'center',paddingTop:'3px',paddingBottom:'3px'}}>
                                <Box sx={{width:'50px',height:'100%'}}>
                                        <IoCashOutline  style={{height:'100%',width:'25px',display:'block',margin:'auto'}}/>
                                </Box>
                                <Box sx={{display:'flex',marginTop:'1px',marginBottom:'7px'}}>
                                <Typography sx={{color:'black',textAlign:'left',fontSize:'12px',fontWeight:'400',marginRight:'5px'}}>Possible payout:</Typography>
                                    <Box sx={{width:'54px',marginLeft:'7px',marginRight:'7px',height:'100%',textAlign: 'center',display:'flex'}}>
                                        <Typography sx={{color:'black',textAlign:'left',fontSize:'15px',fontWeight:'700',textAlign:'center',marginTop:'-2px',marginRight:'5px'}}>{possiblePayOut}</Typography>
                                        <Typography sx={{color:'black',textAlign:'left',fontSize:'15px',fontWeight:'700',textAlign:'center',marginTop:'-2px'}}>DAI</Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    )})}
                    </List>
                </Box>



                <Box className={styles.betSlipButtonsBox}>

                {[100,200,300].map((value,index)=>{
                    return(
                        <Box className={styles.presetBetButton} key={index} onClick={()=>{setBet(value)}}>{value}</Box>
                    )
                })}

                        <Box className={styles.presetBetButton} onClick={()=>setMaxBet()}>Max</Box>
                </Box>

                <Box className={styles.boxBeforeBetSlipSelectedMatchBox}/>
                <Box sx={{display:'flex',justifyContent: 'center'}}>
                    <Box sx={{"borderRight":"1px solid #efefef","display":"flex","paddingTop":"10px","marginBottom":"10px","textAlign":"center",flexDirection:'column',width: "100%"}}>
                        <Typography sx={{whiteSpace: 'pre-wrap'}}>Bet Total</Typography>
                        <Typography sx={{"color":"#e57714","margin":"0","fontSize":"1.35rem"}}>{totalBet} DAI</Typography>
                    </Box>

                    <Box sx={{"display":"flex","paddingTop":"10px","textAlign":"center",flexDirection:'column',width: "100%"}}>
                        <Typography sx={{whiteSpace: 'pre-wrap'}}>Possible Winnings</Typography>
                        <Typography sx={{"color":"#52b49c","margin":"0","fontSize":"1.35rem"}}>{totalPossiblePayout} DAI</Typography>
                    </Box>
                </Box>

                {
                    !props.user.hasProvider ?
                    <InstallMetaMaskButton style={{width:'100%',marginLeft:'0px',marginRight:'0px',paddingTop:'0.5rem',paddingBottom:'0.5rem',fontSize:'20px'}}/> :
                    props.user.loggedIn ?
                    <button className={styles.submitButton} onClick={()=>placeBet()}>
                        <Typography sx={{fontSize:'25px',fontWeight:'600'}}>Place a Bet</Typography>
                    </button> :
                    <ConnectButton style={{width:'100%',marginLeft:'0px',marginRight:'0px',paddingTop:'0.5rem',paddingBottom:'0.5rem',fontSize:'20px'}} setDisconnected={props.setDisconnected} connectMetaMask={connectMetaMask}/>
                }

                
                
            </Box>}
            <BetConfirmPopup result={confirmModalResult} fullScreen={fullScreen} open={confirmBetModalOpen} handleClose={handleconfirmBetModalClose} orderReceiptArr={globalOrderReceiptArr} totalBet={globalTotalBet} totalPossiblePayout={globalTotalPossiblePayout}/>
        </Box>  


    );

    return (
        <Fragment key={anchor}>
                {props.odds.isOddsLoading ? void(0) : list(anchor)}
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        betSlip: state.betSlip,
        odds: state.odds,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addBetSlipMatch: (outcomeID) => {
        dispatch(addBetSlipOutcome(outcomeID));
      },
      removeBetSlipOutcome: (outcomeID) => {
        dispatch(removeBetSlipOutcome(outcomeID));
      },
      removeAllBetSlipOutcomes: () => {
          dispatch(removeAllBetSlipOutcomes());
      },
      setBetAmount: (betAmount)=>{
          dispatch(setBetAmount(betAmount))
      },
      setDisconnected: (disconnected) => {
        dispatch(setDisconnected(disconnected))
      }
    };
};
  

BottomBetslipSideDrawer.propTypes = {
    setSlipOpen: PropTypes.func,
    isSlipOpened: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBetslipSideDrawer);

  
