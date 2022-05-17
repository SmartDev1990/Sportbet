import {FaGamepad,FaFutbol,FaBasketballBall,FaHockeyPuck,FaFootballBall,FaBaseballBall,FaFlagCheckered} from 'react-icons/fa';
import {RiBoxingFill} from 'react-icons/ri';

export const FeaturePageIcons = (props) => {
    switch(props.sport){
        case "Soccer":

        return(<FaFutbol style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px',color:'#187e4b'}} />)

        case "Basketball":

        return(<FaBasketballBall style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px', color:'#ff8d5c'}} />)

        case "Ice Hockey":

        return(<FaHockeyPuck style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px', color:'#3fbada'}} />)

        case "MMA":

        return(<RiBoxingFill style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px', color:'#f44336'}} />)

        case "American Football":

        return(<FaFootballBall style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px',color:'#966a5b'}} />)

        case "Baseball":

        return(<FaBaseballBall style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px',color:'#fcf6d6'}} />)

        default:

        return(<FaFutbol style={{alignSelf:'end',height:'20px',width:'20px', position: 'relative',top: '-3px',color:'#187e4b'}} />)
    }
}