import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, Typography,Box} from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useMemo, useState,useEffect } from "react";
import {LoaderSpin} from '@components/Dashboard/LoaderSpin'
import {useRouter} from "next/router"

const columns = [
    // {
    //  name: "bet_time",
    //  label: "Bet Time",
    //  options: {
    //   filter: false,
    //   sort: true,
    //  }
    // },
    {
     name: "game_time",
     label: "Game Time",
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     name: "game",
     label: "Game",
     options: {
      filter: false,
      sort: true,
     }
    },
    {
        name: "bet",
        label: "Bet",
        options: {
            filter: true,
            sort: true,
        }
     },
     {
        name: "stake",
        label: "Stake (DAI)",
        options: {
            filter: true,
            sort: true,
        },
     },
     {
        name: "odds",
        label: "Odds",
        options: {
            filter: false,
            sort: true,
        }
     },
     {
        name: "possible_return",
        label: "Possible Return (DAI)",
        options: {
            filter: false,
            sort: true,
        },
     },

];

const options = {
    filterType: 'checkbox',
    pagination: false,
    selectableRows: 'none',
    viewColumns: false,
    search: false,
    print: false,
    download: false,
    filter: false
};

export const BetConfirmPopup = (props) => {
    let data = props.orderReceiptArr;
    let totalBet = props.totalBet;
    let totalPossiblePayout = props.totalPossiblePayout;
    const router = useRouter();
    data.map((item)=>{
        item.game_time = new Date(item.game_time).toLocaleString();
    })

    let betPlaceSuccess = {}
    let betPlaceFail = {}
    let loaderSpin = {}
    betPlaceSuccess.mainContent = (
        <>
            <Box sx={{"display":"flex","flexDirection":"column","alignContent":"center","justifyContent":"center","alignItems":"center"}}>
                <Typography sx={{fontSize: "45px", color: "#14b8a6", borderRadius: "50%", border: "2px solid #14b8a6",height: "70px",textAlign: "center",width: "70px"}}>✓</Typography>
                <Typography sx={{fontSize: "45px", color: "#14b8a6"}}>Success!</Typography>
            </Box>
            <MUIDataTable
            data={data}
            columns={columns}
            options={options}                      
            />  
            <Box sx={{display:'flex',mt:'20px',justifyContent: 'center'}}>
                <Box sx={{display:'flex',mr:'20px'}}>
                    <Typography sx={{fontSize:'25px',fontWeight:'400',mr:'15px'}}>Total Bet: </Typography><Typography  sx={{fontSize:'25px',fontWeight:'500'}}>{`${totalBet} DAI`}</Typography>
                </Box>  

                <Box sx={{display:'flex',ml:'20px'}}>
                    <Typography sx={{fontSize:'25px',fontWeight:'400',mr:'15px'}}>Total Possible Return: </Typography><Typography  sx={{fontSize:'25px',fontWeight:'500'}}>{`${totalPossiblePayout} DAI`}</Typography>
                </Box>  
                
            </Box>  
        </>
    )

    betPlaceSuccess.buttons = (
        <>
             <Button variant="contained" color="info" onClick={()=>{props.handleClose;router.push('/account')}} autoFocus>
                Account Page
            </Button>       
            <Button variant="contained" color="success" onClick={props.handleClose} autoFocus>
                Close
            </Button>
        </>
    )


    betPlaceFail.mainContent = (
        <Box sx={{"display":"flex","flexDirection":"column","alignContent":"center","justifyContent":"center","alignItems":"center"}}>
            <Typography sx={{fontSize: "45px", color: "#d14343", borderRadius: "50%", border: "2px solid #d14343",height: "70px",textAlign: "center",width: "70px"}}>☓</Typography>
            <Typography sx={{fontSize: "45px", color: "#d14343"}}>Oh no!</Typography>
            <Typography sx={{fontSize: "25px", color: "#d14343"}}>Something went wrong!</Typography>
            <Typography sx={{fontSize: "25px", color: "#d14343"}}>Please try again.</Typography>
        </Box>
        
    )

    betPlaceFail.buttons = (
        <Button variant="contained" color="error" onClick={props.handleClose} autoFocus>
            Close
        </Button>
    )


    loaderSpin.mainContent = <LoaderSpin/>
    loaderSpin.buttons = (
        <Button variant="contained" color="info" onClick={props.handleClose} autoFocus>
            Close
        </Button> 
    )



    let renderComponent = (
        <Dialog
            fullScreen={props.fullScreen}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth={"lg"}
            >
                <DialogContent>
                    {props.result == "SUCCESS" ? betPlaceSuccess.mainContent : void(0)}
                    {props.result == "FAIL" ? betPlaceFail.mainContent : void(0)}    
                    {props.result == "LOADING" ? loaderSpin.mainContent : void(0)}
                </DialogContent>
                <DialogActions>
                    {props.result == "SUCCESS" ? betPlaceSuccess.buttons : void(0)}
                    {props.result == "FAIL" ? betPlaceFail.buttons : void(0)}    
                    {props.result == "LOADING" ? loaderSpin.buttons : void(0)}
                </DialogActions>
        </Dialog>
    )



    return renderComponent;
}

