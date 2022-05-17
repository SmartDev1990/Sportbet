import { Link } from "@mui/material";

export const LandingFooterLink = ({children}) => {
    return(
    <Link sx={{color:'white',display: 'flex',justifyContent: 'left',alignItems: 'left',flexWrap: 'wrap',backgroundColor:"#070044",borderRadius:'10px',cursor:'pointer'}} underline="none">{children}</Link>
    )
}