import {
    Button,
    Skeleton
  } from "@mui/material";

export const DashBoardSideBarSkeleton = () => {

    return(
        <Button sx={{
            borderRadius: 1,
            color:  'neutral.300',
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}>
            <Skeleton variant="text" sx={{  width: "60%", marginLeft: "0px", backgroundColor:'#a9a9a9ad'}} />
            <Skeleton variant="circular"sx={{  backgroundColor:'#a9a9a9ad',width: "20px",height: "20px",marginLeft:'auto',marginRight:"5px"}}>
            </Skeleton>
            
          </Button>

    )
}