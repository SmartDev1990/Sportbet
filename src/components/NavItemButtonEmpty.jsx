import { Box, Button, Chip } from '@mui/material';
import NextLink from 'next/link';

export const NavItembutton = (props) => {
    let emptyButtonLink = (
        <Button
        component="a"
        disableRipple
        sx={{
          backgroundColor: props.active && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: props.active ? 'secondary.main' : 'neutral.300',
          fontWeight: props.active && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: props.active ? 'secondary.main' : 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)'
          }
        }}
      >
          <Box sx={{ flexGrow: 1 }}>
            {props.league}
           </Box>
           <Chip label="empty" color="info" sx={{fontSize:'13px',height:'30px'}}/>
        </Button>
    )

    let nonEmptyButtonLink = (
      <NextLink passHref href={{ pathname: props.href}}>
        <Button
        component="a"
        disableRipple
        sx={{
          backgroundColor: props.active && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: props.active ? 'secondary.main' : 'neutral.300',
          fontWeight: props.active && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: props.active ? 'secondary.main' : 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)'
          }
        }}
      >
          <Box sx={{ flexGrow: 1 }}>
            {props.league}
           </Box>
        </Button>
      </NextLink>
    )
    
     return (props.empty ? emptyButtonLink : nonEmptyButtonLink)
}