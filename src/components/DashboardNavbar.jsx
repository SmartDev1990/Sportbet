import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Tabs,
  useMediaQuery,
  Typography
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import { Bell as BellIcon } from "@utils/icons/bell";
import {checkWeb3, connectMetaMask, disconnectMetaMask, switchAccount} from "@utils/web3Provider";
import {ConnectButton} from "@components/Dashboard/ConnectButton";
import {DisplayUserAddressButton} from "@components/Dashboard/DisplayUserAddressButton";
import {LoadingMetaMaskButton} from "@components/Dashboard/LoadingMetaMaskButton";
import { InstallMetaMaskButton } from "@components/Dashboard/InstallMetaMaskButton";
import { InstallMetaMaskSnackBar } from "@components/Dashboard/InstallMetaMaskSnackBar";
import { WrapTab } from "@components/WrapTab";
import { BetIcon } from "@components/Icons/BetIcon"; 
import { TrophyIcon } from "@components/Icons/TrophyIcon";
import { TicketIcon } from "@components/Icons/TicketIcon"
import { LedgerIcon } from "@components/Dashboard/LedgerIcon";
import { SupportIcon } from "./Icons/SupportIcon";
import {SettingsModal} from "@components/Settings/SettingsModal"
import {useState,useEffect, useMemo} from "react"
import { DaiIcon } from "@components/Icons/DaiIcon";
import {Notification} from "@utils/icons/notification";
import {useRouter} from "next/router"


// Redux
import {connect} from "react-redux";
import {setOddsFormat,setPreferUsername,setPreferAvatarStyle,setDisconnected} from "@actions/settingsActions";



/* Function that sets the navigation theme from template */
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DashboardNavbar = (props) => {
  /* Properties for settings modal */
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleClickOpen = () => {
      setSettingsModalOpen(true);
    };

    const handleClose = () => {
      setSettingsModalOpen(false);
    };  

  /* Side navigation variables */
  const { onSidebarOpen, ...other } = props;
  /* Side navigation variables */

  /* Top navigation bar tabs variables */
  const [navigationTabsValue, setNavigationTabsValue] = useState(1);

  const handleNavigationTabsChange = (event, newValue) => {
    setNavigationTabsValue(newValue);
  };

  const { asPath } = useRouter()

  useMemo(()=>{
    if(asPath.search("bookie") != -1)
      setNavigationTabsValue(2)
    else if(asPath.search("account") != -1)
      setNavigationTabsValue(3)
    else if(asPath.search("leaderboard") != -1)
      setNavigationTabsValue(4)
    else if(asPath.search("featured") != -1 || asPath.search("favorite") != -1 || asPath.search("Match") != -1)
      setNavigationTabsValue(1)
    else
      setNavigationTabsValue(false)
  },[asPath])
  



    /* End top navigation bar tabs variables */

  useEffect(function autoLogin() {
      checkWeb3()
      .then((web3Existed)=>{
        if(!web3Existed)
          return
        if(props.settings.disconnected)
          return
        if(!window.ethereum.isConnected())
          return

        connectMetaMask();
      })
      .catch((error)=>{
        console.error(error);
      });
  }, []);

  useEffect(() => {
    async function listenMMAccount() {
      if(window.ethereum){
        window.ethereum.on("accountsChanged", async function() {
          switchAccount();
        });
      }
    }
    listenMMAccount();
  }, []);

  useEffect(() => {
    async function listenMetaMaskDisconnect() {
      if(window.ethereum){
        window.ethereum.on("disconnect", async function() {
          disconnectMetaMask();
        });
      }
    }
    listenMetaMaskDisconnect();
  }, []);

  useEffect(()=>{
      // props.user.web3.eth.subscribe("newBlockHeaders",(err,result)=>{
      //   console.log('hello')
      // })
  },[])

  function confirmSettings(settings){
    props.setPreferUsername(props.user.userAddress,settings.preferUsername);
    props.setOddsFormat(settings.oddsFormat);
    props.setPreferAvatarStyle(props.user.userAddress,settings.preferAvatarStyle);
  }






  return (
    <>    
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
          paddingRight: '0px !important',
          py:'0.3rem'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 0.5,
            fontSize: "20rem"
          }}
        >
          {
          //Menu for the side bar menu component, appears when the screen width is too small.
          }
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>


          <Box sx={{ width: '100%', borderColor: 'divider',
                  ['@media (max-width:900px)']: { 
                  width: '60%'
                }}}>

            <Tabs
              value={navigationTabsValue}
              aria-label="secondary tabs example"
              onChange={handleNavigationTabsChange}
              TabIndicatorProps={/*{style: {background:'#be5df6'}}*/{style:{backgroundColor:'#837dec'}}}
              sx={{
                ['@media (max-width:900px)']: { 
                  display: 'none'
                }
              } }
            >
                <WrapTab value={1} href="/featured" label="Bet Now" icon={<BetIcon/>} iconPosition="start" sx={{py:'0px'}} />
                <WrapTab value={3} href="/account" label="Account"icon={<TicketIcon/>} iconPosition="start" sx={{py:'0px', visibility:`${props.user.loggedIn? "visible" : "hidden"}`, position:`${props.user.loggedIn ? "relative" : "absolute"}`}} />
                <WrapTab value={2} href="/bookie" label="Bookie"icon={<LedgerIcon/>} iconPosition="start" sx={{py:'0px', visibility:`${props.user.loggedIn? "visible" : "hidden"}`, position:`${props.user.loggedIn ? "relative" : "absolute"}`}} />
                <WrapTab value={4} href="/leaderboard" label="Leaderboard" icon={<TrophyIcon/>} iconPosition="start" sx={{py:'0px'}}/>
            </Tabs>

            <Tabs
              value={navigationTabsValue}
              aria-label="icon label tabs example"
              onChange={handleNavigationTabsChange}
              variant="scrollable"
              scrollButtons={true}
              TabIndicatorProps={/*{style: {background:'#be5df6'}}*/{style:{backgroundColor:'#837dec'}}}
              sx={{
                ['@media (min-width:900px)']: { 
                  display: 'none'
                }
              } }
            >
                <WrapTab value={1} href="/featured"  icon={<BetIcon/>} iconPosition="start" sx={{py:'0px',width:'60px',minWidth:'0px'}} />
                <WrapTab value={3} href="/account" icon={<TicketIcon/>} iconPosition="start" sx={{py:'0px',width:'60px',minWidth:'0px'}} />
                <WrapTab value={2} href="/bookie" icon={<LedgerIcon/>} iconPosition="start" sx={{py:'0px',width:'60px',minWidth:'0px'}} />
                <WrapTab value={4} href="/leaderboard"  icon={<TrophyIcon/>} iconPosition="start" sx={{py:'0px',width:'60px',minWidth:'0px'}}/>
            </Tabs>
          </Box>

          {
          //This is the component that helps separate the left side and the right side of the top nav bar
          }
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display:'flex',flexGrow: 1 }}>
          </Box>
    
          {
            props.user.web3Loading ? 
            <LoadingMetaMaskButton/> : 
            !props.user.hasProvider ?  
            <><InstallMetaMaskButton/><InstallMetaMaskSnackBar/></> :
            props.user.loggedIn ? 
            
            <>                           
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: '1rem',mr:'0.5rem'}}>
                <Badge badgeContent={4} color="primary" variant="dot">
                  <Notification fontSize="big" />
                </Badge>
              </IconButton> 
            </Tooltip>             

            <Box>
              <Typography sx={{color:"#4591ff",ml:"20px",fontSize:'1.5rem'}}>
                {props.user.currentNetWork}
              </Typography>
            </Box>

            <DisplayUserAddressButton 
              preferUsername={props.settings.preferUsername[props.user.userAddress]} 
              preferAvatarStyle={props.settings.preferAvatarStyle[props.user.userAddress]} 
              userAddress={props.user.userAddress} 
              disconnectMetaMask={disconnectMetaMask} 
              openSettingsModal={handleClickOpen}
              setDisconnected={props.setDisconnected} 
              balance={props.user.balance}
            /> 
            </> 
            : 
            <ConnectButton setDisconnected={props.setDisconnected} 
              connectMetaMask={connectMetaMask}
            />
          }

        </Toolbar>
      <SettingsModal fullScreen={fullScreen} open={settingsModalOpen} handleClose={handleClose} preferUsername ={props.settings.preferUsername[props.user.userAddress]} oddsFormat={props.settings.oddsFormat} preferAvatarStyle={props.settings.preferAvatarStyle[props.user.userAddress]} confirmSettings={confirmSettings} userAddress={props.user.userAddress}/>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
      user: state.user,
      settings: state.settings
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setPreferUsername: (userAddress,preferUserName) => {
        dispatch(setPreferUsername(userAddress,preferUserName));
      },
      setOddsFormat: (oddsFormat) => {
        dispatch(setOddsFormat(oddsFormat))
      },
      setPreferAvatarStyle: (userAddress,preferAvatarStyle) => {
        dispatch(setPreferAvatarStyle(userAddress,preferAvatarStyle))
      },
      setDisconnected: (disconnected) => {
        dispatch(setDisconnected(disconnected))
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);

