import { Box, Paper, Grid, Card, CardContent, Typography } from '@mui/material';
import { BookieGridCard } from '@components/Bookie/BookieGridCard';

export const BookieGridItem = (props) => {
	return(
		<Grid item
		xs={props.size}
		key={props.id}
		noWrap
		>
			<BookieGridCard
			key={props.id}
			title={props.title}
			data={props.data}
			>
			</BookieGridCard>
		</Grid>
)};
