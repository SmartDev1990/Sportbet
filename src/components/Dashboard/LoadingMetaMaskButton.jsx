import {Button} from '@mui/material';

export const LoadingMetaMaskButton = () => {
    return(
    <Button 
          sx={{whiteSpace: 'nowrap',marginLeft:'20px', fontSize:'16px', color:'white', backgroundColor:'#e57714','&:hover': {backgroundColor: '#ef882b',color:'white'}}}variant="contained">
          Loading
    </Button>)
}