import {Button,Dialog,DialogActions,DialogContent,DialogTitle,Typography,TextField,Box,FormControl,Select,MenuItem,Avatar,Divider} from "@mui/material";
import {useEffect, useState} from 'react'
import { CustomAvatar } from "@components/Dashboard/CustomAvatar";

export const SettingsModal = (props) => {
    const [oddsFormat, setOddsFormat] = useState("decimal");
    const [avatarStyle,setAvatarStyle] = useState("robot");
    const handleAvatarChange = (event) =>{
        setAvatarStyle(event.target.value);
    }

    const handleChange = (event) => {
        setOddsFormat(event.target.value);
    };

    const [preferUsernameInputQuery, setPreferUsernameInputQuery] = useState(props.preferUsername?props.preferUsername:"");

    const validateInputOnChange = (event) => {
        var t = event.target.value;
        if(t.length > 20){
            return
        }
        else{
            setPreferUsernameInputQuery(event.target.value);
        }
    }

    useEffect(()=>{
        setPreferUsernameInputQuery(props.preferUsername?props.preferUsername:"")
    },[props.preferUsername])

    useEffect(()=>{
        setOddsFormat(props.oddsFormat)
    },[props.open,props.oddsFormat])

    useEffect(()=>{
        setAvatarStyle(props.preferAvatarStyle)
    },[props.open,props.preferAvatarStyle])   

    return (
        <Dialog
            fullScreen={props.fullScreen}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
                sx:{
                    px:'30px',
                    py:'10px'
                }
            }}
            >
        <DialogTitle id="responsive-dialog-title">
        {"Settings"}
        </DialogTitle>
        <DialogContent>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                {"Prefer Name:"}
            </Typography>
            <TextField id="standard-basic" placeholder="John" variant="standard" value={preferUsernameInputQuery} onChange={event => validateInputOnChange(event)}  />
        </Box>
        <Divider sx={{my:'2rem'}}/>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                {"Prefer Avatar Style:"}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                value={avatarStyle}
                onChange={handleAvatarChange}
                >
                <MenuItem value={'robot'}>Robot</MenuItem>
                <MenuItem value={'miniavs'}>Miniavs</MenuItem>
                <MenuItem value={'bigsmile'}>Big Smile</MenuItem>
                <MenuItem value={'adventurer'}>Adventurer</MenuItem>
                <MenuItem value={'micah'}>Micah</MenuItem>
                <MenuItem value={'bigear'}>Big Ear</MenuItem>
                </Select>
            </FormControl>
            <Avatar sx={{width:'100px !important',height:'100px',mx:'auto !important'}}><CustomAvatar avatarStyle={avatarStyle} style={{height:'80px',width:'80px'}} seed={props.userAddress}/></Avatar>
        </Box>
        <Divider sx={{my:'2rem'}}/>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                {"Odds Format:"}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                value={oddsFormat}
                onChange={handleChange}
                >
                <MenuItem value={'decimal'}>Decimal</MenuItem>
                <MenuItem value={'american'}>American</MenuItem>
                <MenuItem value={'percentage'}>Percentage</MenuItem>
                </Select>
            </FormControl>
        </Box>

        </DialogContent>
        <DialogActions>
            <Button onClick={()=>{props.handleClose()}} autoFocus>
                Cancel
            </Button>
            <Button autoFocus onClick={()=>{props.confirmSettings({preferUsername:preferUsernameInputQuery,oddsFormat:oddsFormat,preferAvatarStyle:avatarStyle});props.handleClose()}}>
                Confirm
            </Button>
        </DialogActions>
        </Dialog>
    )
}