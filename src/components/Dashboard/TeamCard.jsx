import { Avatar,  Typography} from '@mui/material';
import PropTypes from "prop-types";
import Image from "next/image";
import {useState} from 'react';

export const TeamCard = (props) => {
    const [imagePath,setImagePath] = useState(props.teamIconPath);
    let empty = "/static/images/team_and_player_icons/empty.png"

    const handleError = (e) =>{
        setImagePath(empty);
    }

    return(
        <>
            <Avatar
                sx={{
                    backgroundColor: '#f5f5f5',
                    height: 56,
                    width: 56,
                    margin: 'auto'
                }}
                >
                <div style={{
                width:"50px",
                height:"50px",
                margin:"auto"
                }}>
                    <Image
                    src={imagePath}
                    alt="logo"
                    width="50"
                    height="50"
                    layout="responsive"
                    className="logoStyle"
                    onError={e=>handleError(e)}
                    />
                </div>
        
                </Avatar>
        
            <Typography sx={{marginLeft:'auto',marginRight:'auto',marginTop:'10px',textAlign:'center'}}>{props.teamName}</Typography>
        </>
        );
}


TeamCard.propTypes = {
    teamName:PropTypes.string,
    teamIconPath:PropTypes.string
}