import { FooterCustomDivider } from '@components/Dashboard/FooterCustomDivider';
import { DaiIcon } from '@components/Icons/DaiIcon';
import { FooterLink } from '@components/Dashboard/FooterLink';
import { PolygonIcon } from '@components/Icons/PolygonIcon';
import { MetaMaskIcon } from '@components/Icons/MetaMaskIcon';
import { CoinBaseIcon } from '@components/Icons/CoinBaseIcon';
import { Box,Container, Grid, Typography, Link } from '@mui/material';
export const Footer = () => {
    return(
        <Box sx={{paddingBottom:'200px',marginTop:"100px"}}>
          <FooterCustomDivider/>
            <Container>
              <Grid container spacing={3} sx={{backgroundColor:"var(--bg-color)",marginLeft:'45px'}}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <Typography sx={{display:'block', color:'black', fontSize:'25px'}}>About</Typography>
                  {["Privacy Policy","About Us", "Documentation" ,"Terms and Conditions"].map((item,index)=>{
                    if(index==2)
                      return(<Link sx={{display:'block', color:'black'}} underline="hover" key={index} href="https://openbook.gitbook.io/product-docs/introduction/welcome-to-openbook">{item}</Link>)              
                    else 
                      return( <Link sx={{display:'block', color:'black'}} underline="hover" key={index} href="#">{item}</Link>)
                  })}
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12} >
                  <Typography sx={{display:'block', color:'black', fontSize:'25px'}}>Community</Typography>
                  {["Leaderboards","Blog", "Twitter" ,"Discord"].map((item,index)=>{
                    return(
                      <Link sx={{display:'block', color:'black'}} underline="hover" key={index} href="#">{item}</Link>
                    )
                  })}
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12} >
                  <Typography sx={{display:'block', color:'black', fontSize:'25px'}}>Support</Typography>
                  {["About Us", "Responsive Gambling" ,"FAQ", "General Betting Rules", "Contact Information"].map((item,index)=>{
                    return(
                      <Link sx={{display:'block', color:'black'}} underline="hover" key={index} href="#">{item}</Link>
                    )
                  })}
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12} >
                  <Typography sx={{display:'block', color:'black', fontSize:'25px'}}>Developers</Typography>
                  {["API","GitHub", "Smart Contracts" ,"Polygon"].map((item,index)=>{
                    return(
                      <Link sx={{display:'block', color:'black'}} underline="hover" key={index} href="#">{item}</Link>
                    )
                  })}
                </Grid>
              </Grid>
            </Container>
          <FooterCustomDivider/>
          <Box sx={{  
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'left',
                  flexWrap: 'wrap',
                  marginTop: '16px',
                  marginBottom: '16px'}}>
            <Container>
              <Grid container spacing={3} sx={{backgroundColor:"var(--bg-color)",marginLeft:'30px'}}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <FooterLink><span style={{marginRight:'10px',fontSize:'18px',fontWeight:'500'}}>BET WITH</span><DaiIcon/><span style={{marginLeft:'10px',fontSize:'18px',fontWeight:'500', color:'#f3ad38'}}>DAI</span></FooterLink>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                <FooterLink><span style={{marginRight:'10px',fontSize:'18px',fontWeight:'500'}}>DEPOSIT WITH</span><CoinBaseIcon/><span style={{marginLeft:'10px',fontSize:'18px',fontWeight:'500',color:'#1652f0'}}>Coinbase</span></FooterLink>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                 
                 <FooterLink><span style={{marginRight:'10px',fontSize:'18px',fontWeight:'500'}}>CONNECT BY</span><MetaMaskIcon/><span style={{marginLeft:'10px',fontSize:'18px',fontWeight:'500', color:'#de7111'}}>MetaMask</span></FooterLink>
                </Grid>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <FooterLink><span style={{marginRight:'10px',fontSize:'18px',fontWeight:'500'}}>POWERED BY</span><PolygonIcon/><span style={{marginLeft:'10px',fontSize:'18px',fontWeight:'500',color:'#854ee7'}}>Polygon</span></FooterLink>
                </Grid> 
              </Grid>
            </Container>

          </Box>
          <FooterCustomDivider style={{marginBottom:'0px'}}/>
          <Box>
            <Typography align="right" sx={{marginRight:'2.5%'}} >1.0.0</Typography>
          </Box>
        </Box>
    )
}