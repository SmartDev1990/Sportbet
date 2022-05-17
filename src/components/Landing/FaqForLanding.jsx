import {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import {question_answer_type_dict} from "@utils/faqs";

export const FaqForLanding = (props) =>{
    let [tabState,setTabState] = useState("OpenBook");

    const handleTabButtonClick = (e) => {
        setTabState(e.target.value);
    }
    let styles = props.landingStyles;
    return (
        <section>
        <div className={`${styles.overlay}  ${styles.pt120}`}>
            <div className={`${styles.container}`}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{"flex":"0 0 auto","width":"58.3333333333%"}}>
                        <div style={{justifyContent:'center',textAlign:'center'}}>
                            <h5 className={styles.subTitle}>Frequently Asked Questions</h5>
                            <h2 className={styles.title}>If you have questions we have answer</h2>
                        </div>
                    </div>
                </div>
                <Box style={{display:'flex',justifyContent:'center'}}>
                    <ul className={`${styles.navBorder}`}>
                        <li>
                            <button className={`${styles.tabButton} ${tabState == "OpenBook" ? styles.active : void(0)}`} value="OpenBook" onClick={(e)=>handleTabButtonClick(e)}>OpenBook</button>
                        </li>
                        <li >
                            <button className={`${styles.tabButton} ${tabState == "crypto" ? styles.active : void(0)}`} value="crypto" onClick={(e)=>handleTabButtonClick(e)}>Crypto</button>
                        </li>
                        <li >
                            <button className={`${styles.tabButton} ${tabState == "betting" ? styles.active : void(0)}`} value="betting" onClick={(e)=>handleTabButtonClick(e)}>Betting</button>
                        </li>
                        <li>
                            <button className={`${styles.tabButton} ${tabState == "bookies" ? styles.active : void(0)}`} value="bookies" onClick={(e)=>handleTabButtonClick(e)}>Bookies</button>
                        </li>
                    </ul>
                </Box>
                <Box sx={{backgroundImage: 'linear-gradient(0deg, #070044 0%, #100e60 99%)', paddingTop:'30px',paddingBottom:'70px',borderRadius:'25px'}}>
                {question_answer_type_dict.map((qat,index)=>{
                    return (
                        <Box key={index} className={`${styles.row} ${qat.type != tabState ? styles.faq_hidden : void(10)}`} type={qat.type}>
                            <Box sx={{"flex":"0 0 auto","width":"83.3333333333%"}}>
                                <Accordion sx={{backgroundColor:'#3a2fa4',color:'white'}}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        >
                                        <Typography sx={{fontSize: '1.5rem'}}>{qat.question}</Typography>
                                        </AccordionSummary>
                                        <Box sx={{borderBottom:'1px solid #cbcbcb',width:'98%',marginLeft:'auto',marginRight:'auto'}}/>
                                        <AccordionDetails>
                                        <Typography dangerouslySetInnerHTML={{__html:qat.answer}}>
                                        </Typography>
                                        </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    )
                })}
                </Box>



            </div>
        </div>
    </section>
    )

}