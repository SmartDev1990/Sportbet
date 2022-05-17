import { Box} from '@mui/material';
export const FiveStepsToggle = ({styles,fiveStepsTabState,setFiveStepsTabState}) => {
    return(
        <Box className={styles.fiveStepsToggleBox}>
        <form className={styles.tabber}>
                <label className={styles.tabber_label} htmlFor="t1" onClick={()=>setFiveStepsTabState("bettor")}>Bettor</label>
                <label className={styles.tabber_label} htmlFor="t2" onClick={()=>setFiveStepsTabState("bookie")}>Bookie</label>
                <div className={`${styles.fiveStepBlob} ${fiveStepsTabState=="bettor" ? styles.fiveStepBlob_bettor: styles.fiveStepBlob_bookie}`}></div>
            </form>
        </Box>
    )
}