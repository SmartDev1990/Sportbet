import { Box, Paper, Grid, Card, CardContent, Typography } from '@mui/material';

export const BookieGridCard = (props) => {
	return(
		<Card 
		variant="outlined"
		>
			<CardContent sx={{padding: "1rem"}}>
				<Typography 
				variant="subtitle1"
				sx={{paddingBottom: "1rem"}}
				>
					{props.title}
				</Typography>
				<Typography 
				variant="h6" 
				sx={{color: "blueviolet"}}
				>
					{props.data}
				</Typography>
			</CardContent>
		</Card>
)};
