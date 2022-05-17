import {Box,Typography,Container,Grid, TextField, Button} from '@mui/material'

const contactList = ["Name","E-mail","Phone","Subject"];

export const ContactForm = (props) => {
    let styles = props.support_styles;
    return (
        <Box className={styles.contactFormMain}>
            <Box className={styles.titleSection}>
                <Typography className={styles.contactFormTitle}>
                Get in touch with us
                </Typography>
                <Typography className={styles.contactFormSubTitle}>
                Fill up the form and our team will get back to you within 48 hours
                </Typography>
            </Box>

            <Box>
                <Container>
                <Grid container spacing={3}>
                    {contactList.map((item,index)=>{
                        return(
                            <Grid item lg={6} sm={12} xl={6} xs={12} key={index}>
                                <TextField 
                                fullWidth 
                                variant="standard" 
                                label={item}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                </Container>
                <Box className={styles.textAreaBox}>
                    <TextField
                        placeholder="I would like to get in touch with you about ..."
                        multiline
                        fullWidth
                        rows={5}
                        maxRows={10}
                        sx={{border:'1px solid black',borderRadius:'10px'}}
                    />
                </Box>
                <Box>
                <Button variant="contained" sx={{backgroundColor:'#2c87ef',color:'white', borderRadius:'50px','&:hover': {
              backgroundColor:'#4d63ff',color:'white'
            }}}>Send Message</Button>
                </Box>

            </Box>
        </Box>
    )
}