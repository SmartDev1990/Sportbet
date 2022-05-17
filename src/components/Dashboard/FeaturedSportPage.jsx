import {Box,Typography} from "@mui/material"
import CustomSwiperForFeatureRows from "./CustomSwiperForFeatureRows"
import useWindowDimensions from '@hooks/useWindowDimension';

export const FeaturedSportPage = (props) => {
    let data = props.data
    const { height, width } = useWindowDimensions();

    let data_entries = Object.entries(data);
    let sports_arr = []
    let leagues_arr = []
    data_entries.map((item,index)=>{
        sports_arr.push(item[0]);
        leagues_arr.push(item[1]);
    })

    let featured_data = {}
    leagues_arr.map((league_dict,index)=>{
        let leagues = Object.values(league_dict)
        featured_data[sports_arr[index]] = leagues.flat()
    })

return (
    <Box className={`featured-sport-page ${(props.isSlipOpened && width>900) ? "featured-sport-page-narrow" : "featured-sport-page-full"}`}>
    
     {Object.entries(featured_data).map((sport_league_entries,index)=>{
        if(sport_league_entries[1].length == 0){
            return
        }
        else{
            let sport_key = sport_league_entries[0];
            let league_data = sport_league_entries[1].slice(0,5);
            return (<CustomSwiperForFeatureRows key={index} sport_key={sport_key} league_data={league_data}/>)
        }

    })} 

    <style>{`
    .featured-sport-page{
            height: 100%;
            width: 95%;
            -webkit-transition: width 0.5s ;
            -moz-transition: width 0.5s ;
            -o-transition: width 0.5s ;
            transition: width 0.5s ;
            margin: auto;
        }
    .featured-sport-page-narrow{
        width: calc(100% - 350px);
    }
    .featured-sport-page-full{
        width:95%;
    }
    `}</style>
    </Box>
)
}

