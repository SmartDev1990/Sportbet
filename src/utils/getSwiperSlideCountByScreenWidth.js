export const getSwiperSlideCountByScreenWidth = () =>{
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw >= 1800){
        return 3
    }
    else if (vw >= 1400 ){
        return 2
    }
    else {
        return 1
    }
}