import { Divider } from "@mui/material";



export const LandingFooterDivider = (props) => {
  return(
    <Divider
    sx={{
      border: "1px solid white",
      my: 3,
      opacity: 0.1,
      mx: 'auto',
      width: '95%'
    }}

    style={props.style}
  />
)};

