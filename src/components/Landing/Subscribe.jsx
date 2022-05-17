import { Box, Typography, } from '@mui/material';
export const Subscribe = (props) => {
    let styles = props.styles;
    return (
        <Box className={styles.subscribeSection}>
        <Box className={styles.subscribeBox}>
            <Box className={styles.subscribeBoxTypoBox}>


                <Typography className={styles.title}>
                    Subscribe To Us
                </Typography>

                <Typography className={styles.detailDescriptions}>
                    Subscribe to our newsletter to receive all the latest news and updates
                </Typography>
            </Box>

            <Box className={styles.subscribeInputBox}>
                <input className={styles.subscribeInput} type="text" placeholder="Enter Your Email"/>
                <button className={styles.subscribeButton}><img src="https://pixner.net/bitips/main/assets/images/icon/send-icon.png" alt="icon"/></button>
            </Box>

        </Box>
    </Box>
    )
}