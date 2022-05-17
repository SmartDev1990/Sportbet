import { Link } from "@mui/material";

export const FooterLink = ({children}) => {
    return(
    <Link sx={{color:'black',display: 'flex',justifyContent: 'left',alignItems: 'left',flexWrap: 'wrap',backgroundColor:'#f5f5f5',borderRadius:'10px',cursor:'pointer'}} underline="none">{children}</Link>
    )
}