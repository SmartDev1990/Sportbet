import {Button} from '@mui/material';
import {RiStarLine,RiStarFill} from 'react-icons/ri';
import PropTypes from "prop-types";

export const FavoriteButton = (props) => {
    let temp = <b></b>
    
    return (<Button
    sx={{
        mr: 1,
        padding: '1rem',
        backgroundColor: "#f5f5f5",
        fontSize: '1.2rem',
        cursor: 'pointer',
        order: '99',
        '&:hover': {
            backgroundColor: '#d9d9d9'
        },
        '*':{
            pointerEvents: 'none'
        }
    }}
    variant="body2"
    id={props.FaviorteButtonId}
    onClick={(e)=>{props.favorited ? props.removeFavoriteMatch(props.FaviorteButtonId) : props.addFavoriteMatch(props.FaviorteButtonId)}}
    >
    {props.favorited ? <RiStarFill style={{color:'#ffdb28d1'}}/> : <RiStarLine/>}
    {temp}
    </Button>
    
    )
};

FavoriteButton.propTypes = {
    FaviorteButtonId: PropTypes.any,
    favorited: PropTypes.bool
};