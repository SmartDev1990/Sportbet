import {Typography, Button, Box} from '@mui/material';
import PropTypes from "prop-types";
import {GoTriangleUp,GoTriangleDown} from 'react-icons/go'
import {useEffect, useState} from "react"

export const BetButton = (props) => {
    const [oddsChange,setOddsChange] = useState("normal");



    const oddsGoUp =  () => {
        setOddsChange("oddsUp")
        setTimeout(()=>{
            setOddsChange("normal")
        },4000)
    }

    const oddsGoDown = () =>{
        setOddsChange("oddsDown")
        setTimeout(()=>{
            setOddsChange("normal")
        },4000)
    }

    useEffect(()=>{
        if(props.oddsChange == "normal"){
        }
        else if(props.oddsChange == "oddsUp"){
            oddsGoUp()
        }
        else if(props.oddsChange == "oddsDown"){
            oddsGoDown()
        }
    },[props.oddsChange])


    function betButtonClicked(e){
        props.inSlip ? props.removeBetSlipOutcome(props.BetButtonId) : props.addBetSlipMatch(props.BetButtonId);
        if(!props.firstTimeBetButtonClicked){
            props.setFirstTimeBetButtonClicked(true);
            props.setBetSlipOpen(true);
        }
    }


    let oddsTextStyle = "odds-normal-text"
    let oddsIncreaseTriangleStyle = "odds-increase-triangle"
    let oddsDecreaseTriangleStyle = "odds-decrease-triangle"
    switch(oddsChange){
        case "normal":
            oddsTextStyle = "odds-normal-text"
            oddsIncreaseTriangleStyle = "odds-increase-triangle"
            oddsDecreaseTriangleStyle = "odds-decrease-triangle"
        break;

        case "oddsUp":
            oddsTextStyle = "odds-normal-text odds-go-up-text"
            oddsIncreaseTriangleStyle = "odds-increase-triangle odds-change-tirangle-show-up"
        break;

        case "oddsDown":
            oddsTextStyle = "odds-normal-text odds-go-down-text" 
            oddsDecreaseTriangleStyle = "odds-decrease-triangle odds-change-tirangle-show-up"
        break;

        default:
            oddsTextStyle = "odds-normal-text"
            oddsIncreaseTriangleStyle = "odds-increase-triangle"
            oddsDecreaseTriangleStyle = "odds-decrease-triangle"
        break;
    }
    

    return(
        <Button
        sx={{
            mr: 1,
            px: 1.5,
            py: 2,
            order: props.order,
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#d9d9d9'
            },
            '*':{
            pointerEvents: 'none'
            }
            }}
        variant="body2"
        id={props.BetButtonId}
        onClick={(e)=>betButtonClicked(e)}
        style={props.inSlip? {border:'2px solid black'} : { border:'none'}}
        >
        
            <Typography sx={{mr:'auto'}}>{props.number}</Typography>
            <div style={{padding:'0.5vw'}}></div>
            <div style={{position:'relative'}}>
            <Typography className={oddsTextStyle}>{props.outcome}</Typography>
            <GoTriangleUp className={oddsIncreaseTriangleStyle}/>
            <GoTriangleDown className={oddsDecreaseTriangleStyle}/>

            <style>
                {`
                    .odds-increase-triangle{
                        position:absolute;
                        top:20px;
                        left:20%;
                        color: green;
                        visibility: hidden;
                    }

                    .odds-decrease-triangle{
                        position:absolute;
                        top:20px;
                        left:20%;
                        color: red;
                        visibility: hidden;
                    }

                    .odds-change-tirangle-show-up{
                        visibility: visible;
                    }

                    .odds-normal-text{
                        margin-left:auto;
                        color: #005a98;
                        font-weight: 400;
                    }

                    .odds-go-down-text{
                        color: red;
                        font-weight: 500;
                    }

                    .odds-go-up-text{
                        color: green;
                        font-weight: 500;
                    }

                `}
            </style>
            </div>

        </Button>
)};

BetButton.propTypes = {
    number:PropTypes.string,
    outcome:PropTypes.string,
    BetButtonId: PropTypes.string,
    inSlip: PropTypes.bool
};