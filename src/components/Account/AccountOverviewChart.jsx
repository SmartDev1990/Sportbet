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
            width: 1
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Ticket '
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [500,0,650,1200,700,825,200,650,1200,1800]
        }
    ]
};
export const AccountOverviewChart = (props) => {
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
                                Total Winning
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" sx={{ color:"deepskyblue" }}>
                                1800.00 DAI
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ color: "deepskyblue" }}>
                        0x544...70a9
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