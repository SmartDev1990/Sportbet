import {Card, CardContent, Grid, Typography,Box} from '@mui/material';
import PropTypes from "prop-types";
import {TeamCard } from '@components/Dashboard/TeamCard';
import {BetButton} from '@components/Dashboard/BetButton';
import {FavoriteButton} from '@components/Dashboard/FavoriteButton';
const static_english_soccer_icons_path = "/static/images/team_and_player_icons/";
import {useState, useEffect, useRef} from "react"

// Redux Dependencies
import {connect} from "react-redux";
import {addFavoriteMatch,removeFavoriteMatch} from "@actions/favoriteMatchActions";
import {addBetSlipOutcome,removeBetSlipOutcome} from '@actions/betSlipActions';
import {setBetSlipOpen,setFirstTimeBetButtonClicked} from "@actions/settingsActions";

const MatchCard = (props) => {
  const [betButtonOddsState,setBetButtonOddsState] = useState(['normal','normal']);
  const prevOutcome = useRef()
  useEffect(()=>{
      prevOutcome.current = props.outcomes;
      if(props.odds.oddsChanging.includes(String(props.matchId))){
        console.log(props.odds.oddsChanging)
        let oldOdds = Object.values(prevOutcome.current);
        let newOdds = props.odds.newOdds;
        if(oldOdds[0] != newOdds[0] && oldOdds[1] != newOdds[1]){
          if(oldOdds[0] > newOdds[0]){
            setBetButtonOddsState(["oddsUp","oddsDown"])
          }
          else{
            setBetButtonOddsState(["oddsDown","oddsUp"])
          }
        }
      }
      else{
        setBetButtonOddsState(["normal","normal"])
      }
    },[props.odds.oddsChanging])


  return (
    <Card
      sx={{ height: '100%' }}
    >
      <CardContent style={{height:"100%",position:'relative',paddingBottom:'100px', marginTop:'0px'}}>
        <Grid
          container
          spacing={3}
          style={{ justifyContent: 'space-between', width:"100%",marginLeft:'0px',marginRight:'0px',marginTop:'0px'}}
        >
          <Grid item style={{paddingLeft:'0px',width:'30%'}}>
            <TeamCard teamName={props.match1} teamIconPath={static_english_soccer_icons_path + props.match1 + ".png"}/>
          </Grid>

          <Grid item 
          style={{marginLeft:'auto',marginRight:'auto',marginTop:'30px',textAlign:'center',paddingLeft:'0px'}}>
                <Typography>{props.dateString}</Typography>
                <Typography>{props.timeString}</Typography>
          </Grid>       
          
          <Grid item style={{paddingLeft:'0px',width:'30%'}}>
            <TeamCard teamName={props.match2} teamIconPath={static_english_soccer_icons_path + props.match2 + ".png"}/>
          </Grid>
        
        <Box sx={{display:"flex",alignItems: "center", justifyContent: "center",position:'absolute',bottom:'7%',left:'10%',right:'10%'}}>
        {
          Object.keys(props.outcomes).map( (item,index )=> {
            let outcomeKey = item.toString();
            let outcomeValue = ""
            switch(props.settings.oddsFormat){
              case "decimal":
                outcomeValue = Number(props.outcomes[item]).toFixed(2).toString();
                break;
              case "american":
                outcomeValue = Number(props.outcomesInUS[item]).toFixed(0).toString();
                break;
              case "percentage":
                outcomeValue = `${(Number(props.outcomesInProb[item])*100).toFixed(1).toString()}%`;
                break;
              default:
                outcomeValue = props.outcomes[item].toString();
            }
            
            return(
            <BetButton
            key={outcomeKey}
            number={outcomeKey} 
            outcome={outcomeValue}
            BetButtonId={props.matchId+"/"+outcomeKey}
            addBetSlipMatch={props.addBetSlipMatch}
            removeBetSlipOutcome={props.removeBetSlipOutcome}
            inSlip={props.betSlip.betSlipOutcomeArray.includes(props.matchId+"/"+outcomeKey)}
            oddsChange={betButtonOddsState[index]}
            firstTimeBetButtonClicked= {props.settings.firstTimeBetButtonClicked}
            setBetSlipOpen={props.setBetSlipOpen}
            setFirstTimeBetButtonClicked={props.setFirstTimeBetButtonClicked}
            />)
        })}
          <FavoriteButton FaviorteButtonId={props.matchId} addFavoriteMatch={props.addFavoriteMatch} removeFavoriteMatch={props.removeFavoriteMatch} favorited={props.favoriteMatch.favoritedMatchArray.includes(props.matchId)}/>
        </Box>  
        </Grid>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
      favoriteMatch: state.favoriteMatch,
      betSlip: state.betSlip,
      settings: state.settings,
      odds: state.odds
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addFavoriteMatch: (matchId) => {
        dispatch(addFavoriteMatch(matchId));
        },
      removeFavoriteMatch: (matchId) => {
        dispatch(removeFavoriteMatch(matchId));
      },
      addBetSlipMatch: (outcomeID) => {
        dispatch(addBetSlipOutcome(outcomeID));
      },
      removeBetSlipOutcome: (outcomeID) => {
        dispatch(removeBetSlipOutcome(outcomeID));
      },
      setBetSlipOpen: (open) => {
        dispatch(setBetSlipOpen(open));
      },
      setFirstTimeBetButtonClicked: (clicked) => {
        dispatch(setFirstTimeBetButtonClicked(clicked));
      },
    };
};

MatchCard.propTypes = {
  match1:PropTypes.string,
  match2:PropTypes.string,
  outcomes:PropTypes.object,
  dateString:PropTypes.string,
  timeString:PropTypes.string,
  matchid: PropTypes.string,
};



export default connect(mapStateToProps, mapDispatchToProps)(MatchCard);
