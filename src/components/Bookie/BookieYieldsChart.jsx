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
            id: 'yields-chart',
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
            data: [22, 97, 113, 23, 74, 59, 141, 32, 98, 38, 47, 84, 149, 126, 68, 25, 8, 37, 55, 24, 15]
        }
    ],
    xaxis: {
        type: 'numeric'
    }
};
export const BookieYieldsChart = (props) => {
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
            <Grid container sx={{ p: 2, pb: 0, color: '#c4c4c4' }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" sx={{ color: "deepskyblue" }}>
                                Yields (by Month)
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" sx={{ color:"deepskyblue" }}>
                                Current: %15
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ color: "deepskyblue" }}>
                        (in %)
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