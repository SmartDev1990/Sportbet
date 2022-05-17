import Head from "next/head";
import { Box } from "@mui/material";
import { DashboardLayout } from "@components/DashboardLayout";
import styles from '@styles/support.module.css';
import { FAQ } from "@components/Dashboard/FAQ";
import {ContactForm} from "@components/Dashboard/ContactForm"

const Dashboard = (props) => 
{  
    return (
    <>
    <Head>
        <title>Support | OpenBook</title>
    </Head>
        <Box>
            <section className={`${styles.bannerSction}`}>
            <div className={`${styles.overlay}`}>
                <img src="https://pixner.net/bitbetio/main/assets/images/contact-illus.png" className={`${styles.backgroundImg}`} alt="image"/>
                <div className={styles.bannerContent}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                                <div className={styles.mainContent}>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        <ContactForm support_styles={styles}/>
        <FAQ support_styles={styles}/>
    </Box>
    </>
)};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;



