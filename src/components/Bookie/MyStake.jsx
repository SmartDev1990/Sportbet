import Head from "next/head";
import { useState } from "react";
import { Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DashboardLayout } from "@components/DashboardLayout";
import { BookieGrid } from "@components/Bookie/BookieGrid";

const useStyle = makeStyles({
  root: {
    marginTop: "1rem",
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    height: "4px",
    borderRadius: "2rem",
    /*backgroundColor: "transparent",*/
  },
  indicatorSpan: {
    maxWidth: "40px",
    width: "100%",
    backgroundColor: "#156fd6",
  },
  bookieHeader: {
    margin: "1rem",
    textAlign: "center",
    fontSize: "48px",
  },
});

export const MyStake = () => {
  const styles = useStyle();

  return (
    <>
      <Head>
        <title>Bookie | OpenBook</title>
      </Head>
      <h1 className={styles.bookieHeader}>WITHDRAWL PAGE COMING SOON</h1>
    </>
  );
};

MyStake.getLayout = (page) => {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};
