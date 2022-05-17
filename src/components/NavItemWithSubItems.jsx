import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem, Collapse,List,Chip } from '@mui/material';
import { useMemo, useState } from 'react';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {NavItembutton} from "@components/NavItemButtonEmpty"

export const NavItemWithSubItems = (props) => {
  const { href, icon, sport, leagues, leagues_length_arr, ...others } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  useMemo(()=>{
    if(router.asPath.search(sport) != -1){
      setOpen(true);
    }
  },[router.asPath])


  return (
    <>
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            borderRadius: 1,
            color:  'neutral.300',
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
          onClick={handleClick}
        >
          <Box sx={{ flexGrow: 1 }}>
            {sport}
          </Box>
          <MdOutlineKeyboardArrowDown className={`nav-item-button-arrow ${open ? "nav-item-button-arrow-opened" : ""} `}/>
          <style>
            {`
                .nav-item-button-arrow{
                    width: 20px;
                    height: 20px;
                    transition: 0.2s;
                    transform: rotateZ(0deg);
                }
                .nav-item-button-arrow-opened{
                    transform: rotateZ(-90deg);
                }
            `}
        </style>
        </Button>
    </ListItem>
    <Collapse in={open} timeout="auto">
    <List component="div" disablePadding>
    {leagues.map((league,leagueIndex)=>{
        let empty = leagues_length_arr[leagueIndex] == 0;
        let href = `/Matches/${sport}/${league}`;
        let active = false;
        if(router.asPath.replaceAll("%20"," ").search(league) != -1){
          active = true
        }
        return(
        <ListItem 
          key={`${league}/${leagueIndex}`}
          disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                paddingLeft: '15%',
                width:'95%'
            }}>
            <NavItembutton league={league} empty={empty} active={active} href={href}/> 
        </ListItem>
        )

    })}
        </List>
    </Collapse>
    </>
  );
};

NavItemWithSubItems.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  sport: PropTypes.string
};
