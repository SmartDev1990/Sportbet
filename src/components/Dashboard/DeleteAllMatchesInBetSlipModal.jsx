import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@mui/material";

export const DeleteAllMatchesInBetSlipModal = (props) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth={"sm"}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Clear your betslip?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        By clicking yes, all matches in your betslip will be cleared.
                    </DialogContentText>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} autoFocus>
                        No
                    </Button>
                    <Button autoFocus onClick={()=>{props.clearAllBets();props.removeAllBetSlipOutcomes();props.handleClose()}}>
                        Yes
                    </Button>
                </DialogActions>
        </Dialog>
    )
}

