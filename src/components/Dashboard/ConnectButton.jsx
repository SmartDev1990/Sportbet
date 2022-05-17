import {Button} from '@mui/material';

export const ConnectButton = (props) => {
    return(
        
    <Button 
          onClick={() => {props.connectMetaMask();props.setDisconnected(false)}}
          sx={{whiteSpace: 'nowrap',marginLeft:'20px', fontSize:'16px', color:'white',px:'30px', backgroundColor:'#e57714','&:hover': {backgroundColor: '#ef882b',color:'white'}}} variant="contained"
          style={props.style}>
          Connect Wallet
    </Button>)
}

