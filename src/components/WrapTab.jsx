import Link from 'next/link';
import {Tab} from '@mui/material';
export const WrapTab = (props) => {
    const { href } = props
    return (
    <Link href={href} style={{ width: "100%" }}>
      <Tab {...props} >
      </Tab>
    </Link>
)}