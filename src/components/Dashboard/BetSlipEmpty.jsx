import {Box,Typography} from '@mui/material';
import {IoTicket} from 'react-icons/io5';

export const BetSlipEmpty = (props) => (
    <Box sx={{width:'100%',px:'16px',py:'64px',backgroundColor:'white', textAlign:'center'}}>
    <IoTicket style={{width:'108px',height:'108px',color:'#d9d9d9',marginBottom:'12px'}}/>
    <Typography sx={{fontSize:'16px',fontWeight:'700'}}>Your betslip is empty</Typography>
    <Typography sx={{fontSize:'14px',fontWeight:'400'}}>Click on odds to add a ticket</Typography>
    </Box>
)