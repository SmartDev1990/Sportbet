import { Box, Button, Tab, Tabs, Typography, Grid,Avatar } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import {MainCard} from "@components/Account/MainCard";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



export const AccountCard = (props) => {
    let card_bg_color = props.card_style?.card_bg_color
    let card_second_color = props.card_style?.card_second_color
    let card_title = props.card_style?.card_title
    let card_number = props.card_style?.card_number
    let card_icon = props.card_style?.card_icon
    
    const CardWrapper = styled(MainCard)(({ theme }) => ({
        backgroundColor: card_bg_color,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: card_second_color,
            borderRadius: '50%',
            top: -85,
            right: -95,
            [theme.breakpoints.down('sm')]: {
                top: -105,
                right: -140
            }
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: card_second_color,
            borderRadius: '50%',
            top: -125,
            right: -15,
            opacity: 0.5,
            [theme.breakpoints.down('sm')]: {
                top: -155,
                right: -70
            }
        }
    }));

    const theme = useTheme();
    return (
        <CardWrapper border={false} content={false}>
            <Box sx={{ p: 2.25 }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        "position":"relative","display":"flex","WebkitBoxAlign":"center","alignItems":"center","WebkitBoxPack":"center","justifyContent":"center","flexShrink":"0","fontFamily":"Inter, sans-serif","lineHeight":"1","overflow":"hidden","userSelect":"none","color":"rgb(30, 136, 229)","background":card_bg_color,"borderRadius":"8px","width":"44px","height":"44px","fontSize":"1.5rem","marginTop":"8px"
                                    }}
                                >
                                    <img src={card_icon} alt="Notification" height='40px' width='40px' />
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                    {card_number}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ mb: 1.25 }}>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                "margin":"0px",
                                "lineHeight":"1.334em",
                                "fontFamily":"Inter, sans-serif",
                                "color":"white"
                            }}
                        >
                            {card_title}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </CardWrapper>
    )
}