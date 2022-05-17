import Head from "next/head";
import { useEffect, useState,useMemo } from "react";
import {
  Tab,
  Tabs,
  Button,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DashboardLayout } from "@components/DashboardLayout";
import { StakingDataCard } from "@components/Bookie/StakingDataCard";
import { addLiquidity, getPoolLiquidity, getUserLiquidity, getUserHold, removeLiquidity,handleLiqChange } from "@utils/web3Provider";
import { DaiIcon } from "@components/Icons/DaiIcon";


// Redux Dependencies
import {connect} from "react-redux";

const useStyle = makeStyles({
  root: {
    marginTop: "1rem",
  },
  bookieHeader: {
    marginTop: "1rem",
    textAlign: "center",
    fontSize: "48px",
    color: "midnightblue",
  },
  subtitle: {
    marginBottom: "1rem",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "400",
    color: "#5048e5",
  },
  stakingHeader: {
    textAlign: "center",
    fontSize: "36px",
    color: "midnightblue",
  },
  stakingText: {
    marginBottom: "1rem",
    textAlign: "center",
  },
});

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#004e92",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#004e92",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#5048e5",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "royalblue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#004e92",
    },
  },
});

// const initLiqVals = async () => {
//   const total = await getPoolLiquidity();
//   const user = await getUserLiquidity();
//   return [total, user];
// }

const Staking = (props) => {
  const styles = useStyle();
  let liqDisplayValue = props.bookie.liqDisplayValue;
  let balanceHoldValue = props.bookie.balanceHoldValue;
  let withdrawableValue = props.bookie.withdrawableValue;
  let userStakeValue = props.bookie.userStakeValue;
  const [depositAmountInput, setDepositAmountInput] = useState("0");
  const [withdrawable,setWithdrawable] = useState(true);

  useEffect(()=>{
    if(props.user.web3)
      handleLiqChange();
    else
      return
  },[props.user.web3])


  const stringToNum = (txt) => {
    if(txt.split){
      let number = txt.split(" ")[0];
      return Number(number)
    }
    else{
      return 0;
    }
  }

  let depositAmountInputNumber = Number(depositAmountInput);
  let withdrawableValueNumber = stringToNum(withdrawableValue);
  if(withdrawable){
    if(depositAmountInputNumber > withdrawableValueNumber){
      setWithdrawable(false);
    }
  }
  else{
    if(depositAmountInputNumber <= withdrawableValueNumber){
      setWithdrawable(true);
    }
  }

  return (
    <>
      <h1 className={styles.bookieHeader}>Become the Bookie:</h1>
      <h2 className={styles.subtitle}>
        Provide liquidity for bettors and earn over time
      </h2>

      {/* Two column layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          borderStyle: "groove",
          borderWidth: "4px",
          borderColor: "#5048e5",
          borderRadius: "2rem",
          padding: "1rem",
          overflow: "hidden",
          gap: "1rem",
          backgroundColor: "#f3f5f9",
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "40%",
            borderRight: "2px solid #5048e5",
            paddingRight: "1rem",
          }}
        >
          <h3 className={styles.stakingHeader}>Staking Menu</h3>
          <Typography className={styles.stakingText}>
            Input the amount of DAI you want to stake or from the OpenBook Liquidity
            Pool
          </Typography>

          {/* Deposit Amount input box */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              marginTop: "auto",
            }}
          >
            <StyledTextField
              sx={{
                marginX: "auto",
              }}
              value={depositAmountInput}
              id="deposit-input"
              variant="outlined"
              label=" Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDepositAmountInput(e.target.value)}
              InputProps={{
                endAdornment: <DaiIcon />,
              }}
            />
          </Box>

          {/* Buttons box */}
          <Box sx={{ display: "flex", width: "100%", marginTop: "1rem",justifyContent:'center' }}>
            <Button
              variant="contained"
              sx={{ marginRight: "7px" }}
              onClick={() => {addLiquidity(depositAmountInput);}}
            >
              Stake DAI
            </Button>




            <Button
              variant="contained"
              sx={{ marginLeft: "7px" }}
              className={withdrawable ? void(0) : "disbaleButton"}
              onClick={() => {removeLiquidity(depositAmountInput);}}
            >
              Withdraw DAI
            </Button>
            <style>
              {`        
                .disbaleButton{
                  background-color: #8d8d8d;
                  cursor: not-allowed;
                  pointer-events: none;
                }
              `}
            </style>

          </Box>
        </Box>
        {/* Right Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "60%",
            gap: "0.5rem",
          }}
        >
          <StakingDataCard
            key="totalBookiePool"
            title="Total Bookie Liquidity"
            data={liqDisplayValue}
          />
          <StakingDataCard
            key="userStake"
            title="My Current Stake"
            data={userStakeValue}
          />
          <StakingDataCard
            key="userBalanceHeld"
            title="Balance on Hold"
            data={balanceHoldValue}
          />
          <StakingDataCard
            key="amtToStake"
            title="Withdrawable"
            data={withdrawableValue}
          />
          
        </Box>
      </Box>
    </>
  );
};

Staking.getLayout = (page) => {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
      user: state.user,
      bookie: state.bookie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Staking);
