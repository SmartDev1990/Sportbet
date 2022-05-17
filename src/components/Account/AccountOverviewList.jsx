import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Card, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const WinRow = ({title,number,description}) => {
    const theme = useTheme();
    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        {number} DAI
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '5px',
                                            backgroundColor: theme.palette.success.light,
                                            color: theme.palette.success.dark,
                                            ml: 2
                                        }}
                                    >
                                        <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
        </>
    )
}

const LoseRow = ({title,number,description}) => {
    const theme = useTheme();
    return(
        <>
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        {number} DAI
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '5px',
                                            backgroundColor: "#fbe9e7",
                                            color: '#d84315',
                                            marginLeft: 1.875
                                        }}
                                    >
                                        <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" sx={{ color: '#d84315' }}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
        </>
    )
}

export const AccountOverviewList = (props) => {
    const theme = useTheme();
    return(
        <Grid item xs={12} sx={{backgroundColor:'white'}}>
        <Card sx={{backgroundColor:'white',padding:'20px',minHeight:'471px'}}>
        <WinRow title="Orlando Magic vs Brooklyn Nets" number="125" description="Orlando Magic(1.25)" />
        <WinRow title="Utah Jazz vs Chicago Bulls" number="	650" description="Utah Jazz(3.25)" />
        <WinRow title="Golden State Warriors vs Boston Celtics" number="870" description="Golden State Warriors(1.74)" />
        <LoseRow title="Sacramento Kings vs Milwaukee Bucks" number="396" description="Sacramento Kings(3.96)" />
        <WinRow title="Golden State Warriors vs Boston Celtics" number="870" description="Golden State Warriors(1.74)" />
        <LoseRow title="Sacramento Kings vs Milwaukee Bucks" number="396" description="Sacramento Kings(3.96)" />
        <LoseRow title="Sacramento Kings vs Milwaukee Bucks" number="396" description="Sacramento Kings(3.96)" />
        </Card>

        </Grid>
    )
}