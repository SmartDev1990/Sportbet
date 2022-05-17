import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from 'next/router'

const pages = ['Home', 'Bet Now', "Docs", 'About Us', "Leaderboard"];
const links = ['/landing', '/', 'https://openbook.gitbook.io/product-docs/','#','/leaderboard']

export const NavBar = (props) => {
    const router = useRouter();
    let styles = props.landingStyles;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
    <AppBar position="sticky" sx={{
        backgroundImage: "linear-gradient(to bottom, #5e0cff, #300282)",
        backgroundColor:'transparent',
        py:'20px'
        }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <NextLink 
            href="/featured" 
            passHref
            >
            <a style={{
              textDecoration:"none",
              display:'flex',
              alignItems:'center'
            }}>
                <div style={{
                  width:"50px",
                  height:"50px",
                  margin:"auto"
                }}>
                  <Image
                    src="/static/open_book_logo.png"
                    alt="logo"
                    width="50"
                    height="50"
                    layout="responsive"
                    className="logoStyle"
                    priority={true}
                  />
                </div>
                <Typography color="neutral.100" 
                variant="h5" 
                sx={{ml:'20px'}}>
                  OpenBook
                </Typography>
            </a>
          </NextLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pages.map((page,index) => (
              <Button
                className={`${styles.navMenuItems} ${index==0 ? styles.navBarAtive : void(0)}`}
                key={page}
                onClick={()=>{router.push(links[index])}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    )
}