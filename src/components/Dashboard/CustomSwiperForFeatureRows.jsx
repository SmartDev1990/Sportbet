import { useState,useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Typography} from "@mui/material"
import { MdOutlineNavigateBefore,MdOutlineNavigateNext } from "react-icons/md";
import {FeaturePageIcons} from "@components/Icons/FeaturePageIcons"
import { getSwiperSlideCountByScreenWidth } from "@utils/getSwiperSlideCountByScreenWidth";


import "swiper/css";
import "swiper/css/navigation";

import FeaturedMatchCard from "./FeaturedMatchCard";




export default function CustomSwiperForFeatureRows(props) {
    const [my_swiper, set_my_swiper] = useState({});
    const [isBeginning,setIsBeginning] = useState(true);
    const [isEnd,setIsEnd] = useState(false);
    const [slideCount,setSlideCount] = useState(1);

    const handleResize = () =>{
      setSlideCount(getSwiperSlideCountByScreenWidth())
    }

    //componentDidMount
    useLayoutEffect(()=>{
      setSlideCount(getSwiperSlideCountByScreenWidth())
      window.addEventListener("resize", handleResize);
    },[])

    //componentDidUnmount
    useLayoutEffect( () => () => {window.removeEventListener("resize", handleResize)}, [] );

    if(my_swiper.on){
      my_swiper.on('slideChange', function (e) {
        if(my_swiper.activeIndex == 0){
          setIsBeginning (true);
        }
        else{
          setIsBeginning (false);
        }
        if(my_swiper.activeIndex == my_swiper.snapGrid.length-1){
          setIsEnd(true);
        }
        else{
          setIsEnd(false);
        }
    });
    }

    let prevButtonClasses = "custom-feature-swpier-button" + " " + "custom-feature-swpier-prev-button";

    if(isBeginning){
      prevButtonClasses += " " + "custom_feature_swiper_disable";
    }

    let nextButtonClasses = "custom-feature-swpier-button" + " " +  "custom-feature-swpier-next-button";

    if(isEnd){
      nextButtonClasses += " " + "custom_feature_swiper_disable";
    }
  return (
    
    <>
        <div style={{width:"100%",textAlign:'right',paddingRight:'20px',display:'flex',paddingBottom:'0px',marginTop:'20px'}}>
        <Typography  sx={{marginLeft:'20px',paddingTop:'30px',paddingBottom:'0px',fontSize:'17px', fontWeight:'500',marginTop:'auto',marginRight:'10px'}}>{`${props.sport_key}`}</Typography>
        <FeaturePageIcons sport={props.sport_key}/>
        
        <button className={prevButtonClasses} onClick={()=>my_swiper.slidePrev()}><MdOutlineNavigateBefore className="custom-feature-swpier-button-inner-svg"/></button>
        <button className={nextButtonClasses} onClick={()=>my_swiper.slideNext()}><MdOutlineNavigateNext className="custom-feature-swpier-button-inner-svg"/></button>
        <style>{`
        .custom-feature-swpier-button{
          margin-right: 10px;
          border-radius: 50%;
          background-color: white;
          border: none;
          padding: 5px;
          height: fit-content;
          margin-top: auto;
          cursor:pointer;
          padding-top: 3px;
          padding-bottom: 3px;
        }
        .custom-feature-swpier-prev-button{
          margin-left: auto;

        }
        .custom-feature-swpier-next-button{

        }
        .custom-feature-swpier-button:hover{
          background-color:black;
          color:white;
        }
        .custom-feature-swpier-button-inner-svg{
          font-size:18px;
        }
        .custom_feature_swiper_disable{
          color: #9d9d9d;
          background-color: #e9e9e9;
          cursor: auto;
        }
        .custom_feature_swiper_disable:hover{
          background-color: #f5f5f5;
          color: #9d9d9d;
        }
        
        `}</style>
        </div>
        <Swiper
            onInit={(ev) => {
            set_my_swiper(ev)
            }}
            cssMode={false}
            navigation={false}
            mousewheel={false}
            keyboard={false}
            className="feature-page-pictures-swiper"
            style={{paddingTop:'0px',marginLeft:'20px',marginRight:'20px'}}
            slidesPerView={slideCount}
            spaceBetween={30}
            shortSwipes={false}
        >
        {
            props.league_data.map((match) => {
            let datetime = new Date(match.timestamp);
            let dateStringForProps=datetime.toLocaleString('default', { month: 'short', day:'numeric' })
            let timeStringForProps=datetime.toLocaleString('default', { hour: 'numeric', minute:'numeric',  hourCycle: 'h23' })
            return  (
                <SwiperSlide key={match.id} style={{borderRadius:"10px",overflow:'auto'}} >
                    <FeaturedMatchCard 
                    key={match.id}
                    match1={match.match[0]} 
                    match2={match.match[1]} 
                    outcomes={match.outcomes}
                    outcomesInUS={match.outcomesInUS}
                    outcomesInProb={match.outcomesInProb}
                    dateString={dateStringForProps}  
                    timeString={timeStringForProps}  
                    matchId={match.id}
                    />
                </SwiperSlide>
                )
            })
        }
      </Swiper>

    </>
  );
}