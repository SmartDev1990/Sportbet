import { Card, CardContent, Typography } from '@mui/material';
import { StakingDivider } from '@components/Bookie/StakingDivider';

export const StakingDataCard = (props) => {
	return(
		<Card 
		variant="outlined"
		>
			<CardContent sx={{ p: "0.5rem", '&:last-child': { pb: "0.5rem" }}}>
				<Typography 
				variant="h6"
				sx={{color: "midnightblue"}}
				>
					{props.title}
				</Typography>
				<StakingDivider />
				<Typography 
				variant="h6" 
				sx={{color: "#004e92", textAlign: "right"}}
				>
					{props.data}
				</Typography>
			</CardContent>
		</Card>
)};