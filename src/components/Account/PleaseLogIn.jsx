import {Box,Typography} from "@mui/material";
import ModelViewer  from "@metamask/logo";
import { useEffect,useRef } from "react";
import Image from 'next/image'

export const PleaseLogIn = (props) => {
    const divEl = useRef(null);
      useEffect(()=>{
        const viewer = ModelViewer({
            // Dictates whether width & height are px or multiplied
            pxNotRatio: true,
            width: 500,
            height: 400,
            // followMouse: true,
          });

        divEl.current.appendChild(viewer.container)
      },[])

    return(
        <Box  ref={divEl} sx={{display:'flex',width:'100%',paddingTop:'50px',justifyContent: 'center', flexDirection: 'column',alignItems: 'center',height:'80vh'}}>
        <Typography sx={{color: "#f78419",fontSize: "35px"}}>Please connect with MetaMask to visit this page.</Typography>
        <Box className={"finger"} sx={{position:'fixed',right:'50px',top:'100px'}}>
            <Image src="/static/images/account/hand.png" height={70} width={70}></Image>
        </Box>
        <style>
            {`
                .finger{
                    animation: movingTopDown 1s linear infinite;
                }

                @keyframes movingTopDown{
                    0% {
                        transform: translateY(0px);
                    }
                    25%{
                        transform: translateY(10px);
                    }
                    75%{
                        transform: translateY(10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
            `}
        </style>
        </Box>
    )
}