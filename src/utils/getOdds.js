import {store} from '../store';
import {setOdds,setUnFormattedOdds,setIsOddsLoadingFalse} from "@actions/oddsActions";

const flatten = (curr) => {
    var dict = {};

    for (var i = 0; i < curr.length; i++) { 
        dict[curr[i]['id']] = curr[i];
    }

    return dict;
}

const decimal_to_us = (odds) => {
    odds = Number(odds);
    if (odds > 2)
    {
        return (100*(odds-1)).toFixed(2)
    }
    else
    {
        return (-100/(odds-1)).toFixed(2)
    }
}


const dec_prob = (odds) => {
    odds = Number(odds);
    return (1/odds).toFixed(2);
}

const decimal_to_us_obj = (outcomeObject) => {
    let us_formatted_outcomes = {}
    Object.keys(outcomeObject).map((key,index)=>{
        us_formatted_outcomes[key] = decimal_to_us(outcomeObject[key])
    })
    return us_formatted_outcomes
}

const decimal_to_prob_obj = (outcomeObject) => {
    let prob_formatted_outcomes = {}
    Object.keys(outcomeObject).map((key,index)=>{
        prob_formatted_outcomes[key] = dec_prob(outcomeObject[key])
    })
    return prob_formatted_outcomes
}


export const getOdds = (data) =>{
    // console.log(data)
    store.dispatch(setUnFormattedOdds(data));

    let all_league_data_array = []
    Object.values(data).map((item,index)=>{
        return Object.values(item).map((item2,index2)=>{
            // console.log(item2)
            item2.forEach((match)=>{
                match.outcomesInUS = decimal_to_us_obj(match.outcomes);
                match.outcomesInProb = decimal_to_prob_obj(match.outcomes);
            })

            all_league_data_array.push(flatten(item2))
        })
    })
    let all_league_data_obj = Object.assign({},...all_league_data_array);

    // console.log(all_league_data_obj)
    store.dispatch(setOdds(all_league_data_obj));
    // console.log("odds done loading")
    store.dispatch(setIsOddsLoadingFalse());
}

