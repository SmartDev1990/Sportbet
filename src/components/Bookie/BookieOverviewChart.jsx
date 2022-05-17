// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';
import { useEffect } from 'react';
import { Box, Button, Tab, Tabs, Typography, Grid, Card } from "@mui/material";
import dynamic from 'next/dynamic';


const chartData = {
    type: 'area',
    height: 445,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        fill: {
            type: 'gradient'
        },
        tooltip: {
            fixed: {
                enabled: true
            },
            x: {
                show: false,
                title: 'Time (Days)'
            },
            y: {
                title: 'DAI (USD$)'
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [270076, 281473, 254897, 346232, 218114, 270810, 326491, 77068, 328287, 443076, 406936, 403724, 202945, 191287, 379273]
        }
    ],
    xaxis: {
        type: 'numeric'
    }
};
export const BookieOverviewChart = (props) => {
    // const ApexCharts = dynamic(() => import("apexcharts"));
    const Chart = dynamic(() => import("react-apexcharts"));
    // useEffect(() => {
    //     const newSupportChart = {
    //         ...chartData.options,
    //         tooltip: {
    //             theme: 'light'
    //         }
    //     };
    //     if(typeof window !== 'undefined') 
    //         console.log(ApexCharts)
    //         // ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    // }, []);

    return (
        <Card sx={{ bgcolor: 'white',padding:'20px' }}>
            <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" sx={{ color: "deepskyblue" }}>
                                Total Liquidity
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" sx={{ color:"deepskyblue" }}>
                                $379,273
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ color: "deepskyblue" }}>
                        (DAI)
                    </Typography>
                </Grid>
            </Grid>
            <div className="mixed-chart">
                {(typeof window !== 'undefined') &&
                <Chart {...chartData} /> 
                }
            </div> 
        </Card>
    )
}