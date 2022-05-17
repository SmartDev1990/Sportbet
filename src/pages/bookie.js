import Head from "next/head";
import { useState } from "react";
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
import { addLiquidity, getBalance } from "@utils/web3Provider";

import { BookieOverview } from "@components/Bookie/BookieOverview";
import  Staking  from "@components/Bookie/Staking";
import { MyStake } from "@components/Bookie/MyStake";

const BookieHomepage = (props) => {
  const [bookieTabsValue, setBookieTabsValue] = useState("staking");
  const handleBookieTabsChange = (event, newValue) => {
    setBookieTabsValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Bookie | OpenBook</title>
      </Head>
      <Box sx={{ py: "25px", px: "50px", width: "95%", minHeight: "1000px" }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "var(--background-default)",
            py: "20px",
          }}
        >
          <Tabs
            value={bookieTabsValue}
            onChange={(event, newValue) =>
              handleBookieTabsChange(event, newValue)
            }
            centered
            variant="fullWidth"
          >
            <Tab value="staking" label="Staking" />
            <Tab value="overview" label="Overview" />
          </Tabs>
        </Box>

        {bookieTabsValue == "overview" ? <BookieOverview /> : void 0}
        {bookieTabsValue == "staking" ? <Staking /> : void 0}
        {bookieTabsValue == "my-stake" ? <MyStake /> : void 0}
      </Box>
    </>
  );
};

BookieHomepage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default BookieHomepage;
