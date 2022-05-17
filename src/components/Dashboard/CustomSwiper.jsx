import { useEffect, useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getSwiperSlideCountByScreenWidth } from "@utils/getSwiperSlideCountByScreenWidth";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import Image from 'next/image'
import { useRouter } from "next/router";

const swiperImageNames = ['Esport_Betting.jpg',"Online_Betting.jpg",'NBA_Betting.jpg','EPL_Betting.jpg','Esport_Betting_2.jpeg'];
const swiperImageUrls = ['#','#','/Matches/Basketball/NBA','Matches/Soccer/EPL','#']

export const CustomSwiper = () => {
  const router = useRouter();

  const [slideCount,setSlideCount] = useState(1);

  const handleResize = () =>{
    setSlideCount(getSwiperSlideCountByScreenWidth())
  }

  useLayoutEffect(()=>{
    setSlideCount(getSwiperSlideCountByScreenWidth())
    window.addEventListener("resize", handleResize);
  },[])

  useLayoutEffect( () => () => {window.removeEventListener("resize", handleResize)}, [] );
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        modules={[Navigation]}
        className="feature-page-pictures-swiper"
        style={{paddingTop:'0px',width:'95%'}}
        slidesPerView={slideCount}
        spaceBetween={30}
        loop={true}
        onClick={(s,e)=>{s.clickedSlide.click()}}
      >
      
        {swiperImageNames.map((item,index)=>{
          return(<SwiperSlide key={index} style={{borderRadius:"30px",overflow:'auto',width:'770px',height:'350px',cursor:'pointer'}} onClick={()=>{router.push(swiperImageUrls[index])}}><Image src={`/static/images/featured_page_pictures/${item}`} layout='fill'/></SwiperSlide>)
        })}
        

      </Swiper>
    </>
  );
}