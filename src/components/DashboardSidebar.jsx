import { useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { NavItem } from "@components/NavItem";
import { FaStar,FaFire,FaHandshake,FaGamepad,FaFutbol,FaBasketballBall,FaHockeyPuck,FaFootballBall,FaBaseballBall,FaFlagCheckered} from 'react-icons/fa';
import {RiMouseFill,RiBoxingFill} from 'react-icons/ri';
import {CustomDivider} from '@components/Dashboard/CustomDivider'
import {IoTicketOutline} from 'react-icons/io5'
import {AiOutlineMergeCells} from 'react-icons/ai'
import { NavItemWithSubItems } from "@components/NavItemWithSubItems";
import { TechnicalSupportButton } from "@components/Dashboard/TechnicalSupportButton";
import { DashBoardSideBarSkeleton } from "./DashBoardSideBarSkeleton";
import {connect} from "react-redux"

const bettingZoneitems = [
  {
    href: "/featured",
    icon: <FaFire/>,
    title: "Featured Games",
  },
  {
    href: "/favorite",
    icon: <FaStar />,
    title: "Favorite Games",
  },
  {
    href: "/parlays",
    icon: <AiOutlineMergeCells/>,
    title: "Parlays",
  }
];

const mapSportToIcon = (sport) => {
    switch(sport){
      case "American Football":
        return <FaFootballBall />
      break;

      case "Baseball":
        return <FaBaseballBall />
      break;

      case "Basketball":
        return <FaBasketballBall />
      break;

      case "Ice Hockey":
        return <FaHockeyPuck />
      break;

      case "MMA":
        return <RiBoxingFill />
      break;

      case "Soccer":
        return <FaFutbol />
      break;

      default:
        return <RiMouseFill />
    }
}

const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  let data_entries = Object.entries(props.odds.unformattedOddsDict);
  let sports_arr = []
  let leagues_arr = []
  data_entries.map((item,index)=>{
      sports_arr.push(item[0]);
      leagues_arr.push(item[1]);
  })
  let sportsItems = []
  sports_arr.map((sport,sport_index)=>{
    sportsItems.push({
      icon: mapSportToIcon(sport),
      sport: sport,
      leagues: Object.keys(leagues_arr[sport_index]),
      leagues_length_arr: Object.values(leagues_arr[sport_index]).map(item=>item.length)
    })
  })

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <div style={{
          overflow: "hidden",
          margin: "1rem",
          alignSelf: "center",
          }}>
          <NextLink 
            href="/featured" 
            passHref
            >
            <a style={{
              textDecoration:"none"
            }}>
                <div style={{
                  width:"100px",
                  height:"100px",
                  margin:"auto"
                }}>
                  <Image
                    src="/static/open_book_logo.png"
                    alt="logo"
                    width="100"
                    height="100"
                    layout="responsive"
                    className="logoStyle"
                    priority={true}
                  />
                </div>
                <Typography color="neutral.100" 
                variant="h3" >
                  OpenBook
                </Typography>
            </a>
          </NextLink>
        </div>
        <CustomDivider/>
        <Box sx={{ flexGrow: 1 }}>
          {bettingZoneitems.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <CustomDivider/>
        <Box sx={{ flexGrow: 1 }}>{
            props.odds.isOddsLoading 
            ? 
            <>
            <DashBoardSideBarSkeleton/>
            <DashBoardSideBarSkeleton/>
            <DashBoardSideBarSkeleton/>
            <DashBoardSideBarSkeleton/>
            <DashBoardSideBarSkeleton/>
            </>
            :
            sportsItems.map((item,index) => (
            <NavItemWithSubItems
              key={index}
              icon={item.icon}
              href={item.href}
              sport={item.sport}
              leagues={item.leagues}
              leagues_length_arr = {item.leagues_length_arr}
            />
          ))
          }


        </Box>
      <TechnicalSupportButton/>
      </Box>

    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            color: "#FFFFFF",
            width: 280,
            backgroundImage: "linear-gradient(to bottom, #000428, #004e92)"
          },
          style:{
            backgroundImage:"linear-gradient(to bottom, #000428, #004e92)"
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          color: "#FFFFFF",
          width: 280,
          backgroundImage: "linear-gradient(to bottom, #000428, #004e92)"
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>

  );
};

const mapStateToProps = (state) => {
  return{
      odds: state.odds
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};


DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
