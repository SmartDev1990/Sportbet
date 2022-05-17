import { Container, Grid,Skeleton,Card,CardContent,Box } from "@mui/material";

export const SportsBookPageSkeleton = () =>{
    return(
        <Container maxWidth={false}>
            <Grid container spacing={3}>
            {
                [...Array(20).keys()].map((item,index)=>{
                    return(
                    <Grid key={index} item lg={6} sm={12} xl={4} xs={12}>
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
                                <Skeleton variant="circular" width={60} height={60} sx={{mx:'auto',my:'10px'}} />
                                <Skeleton variant="text" width={100} sx={{mx:'auto'}} />
                            </Grid>

                            <Grid item 
                            style={{marginLeft:'auto',marginRight:'auto',marginTop:'30px',textAlign:'center',paddingLeft:'0px'}}>
                                <Skeleton variant="text" width={100} sx={{mx:'auto'}} />
                                <Skeleton variant="text" width={70} sx={{mx:'auto'}} />
                            </Grid>       
                            
                            <Grid item style={{paddingLeft:'0px',width:'30%'}}>
                                <Skeleton variant="circular" width={60} height={60} sx={{mx:'auto',my:'10px'}} />
                                <Skeleton variant="text" width={100} sx={{mx:'auto'}} />
                            </Grid>
                        
                        <Box sx={{display:"flex",alignItems: "center", justifyContent: "center",position:'absolute',bottom:'7%',left:'10%',right:'10%'}}>
                        <Skeleton variant="rectangular"  sx={{height:'51px',width:'25%',mx:"10px",borderRadius:'13%'}}/>
                        <Skeleton variant="rectangular"  sx={{height:'51px',width:'25%',mx:"10px",borderRadius:'13%'}}/>
                        <Skeleton variant="rectangular"  sx={{height:'51px',width:'25%',mx:"10px",borderRadius:'13%'}}/>
                        </Box>  
                        </Grid>
                        </CardContent>
                    </Card>
                </Grid>)
                })
            }
            </Grid>
        </Container>
    )
}