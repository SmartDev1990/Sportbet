import {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import {question_answer_type_dict} from "@utils/faqs";


export const FAQ = (props) =>{
    let [tabState,setTabState] = useState("BetBase");

    const handleTabButtonClick = (e) => {
        setTabState(e.target.value);
    }
    let styles = props.support_styles;
    return (
        <section>
        <div className={`${styles.overlay}  ${styles.pt120}`}>
            
        </div>
    </section>
    )

}
