import { Box, Paper, Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { BookieGridCard } from '@components/Bookie/BookieGridCard';
import { BookieGridItem } from '@components/Bookie/BookieGridItem';
import {getBalance} from "@utils/web3Provider";

const temp = {
	total: "aaa",
	nextPayout: "$1287.55",
	yields: ["3.321%", "1.246%"],
	performance: "<performance graphic goes here>",
	lifetimePayouts: ["$5,919", "$824,753"]
}

export const BookieGrid = (props) => {

  return (
	<Box sx={{ 
		flexGrow: 1,
		p: '2rem',
	}}>
		<Grid container 
		id="bookieOverview"
		alignItems="center"
		spacing={4}
		zeroMinWidth
		>
				<BookieGridItem 
				id="depositedLiquidity"
				title="Liquidity Deposited"
				size="4" 
				data={temp.total}
				/>
				<BookieGridItem 
				id="estNextPayout"
				title="Total Liquidity"
				size="4" 
				data={temp.total}
				/>
				<BookieGridItem 
				id="stakingYields"
				title="Staking Yields"
				size="4" 
				data={temp.yields}
				/>
				<BookieGridItem 
				id="recentPerformanceGraph"
				title="Recent Performance Graph"
				size="12" 
				data={temp.performance}
				/>
				<BookieGridItem 
				id="totalPayouts"
				title="Lifetime Payouts"
				size="12" 
				data={temp.lifetimePayouts}
				/>
		</Grid>
	</Box>
)};
