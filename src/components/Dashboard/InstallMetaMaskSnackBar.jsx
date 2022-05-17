import {Snackbar,Alert} from '@mui/material';
import React from 'react';

export const InstallMetaMaskSnackBar = () => {

    const vertical = "top";
    const horizontal = "right";
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') 
            return
        setOpen(false);
    }

    return (
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        sx={{top:'70px !important'}}
        autoHideDuration={4000}
        >
        <Alert severity="error">Unable To Detect MetaMask. <a style={{color:"inherit",fontSize:"15px"}}rel="noreferrer" target="_blank" href="https://metamask.io/">{'Get MetaMask here!'}</a> </Alert>    
        </Snackbar>
    )
}