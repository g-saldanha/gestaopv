import React from 'react';
import { Chart } from 'primereact/chart';

interface LineChartProps {
    now: number[];
    last: number[];
    labels: string[];
    totais: Metrics.Totais;
    year: any;
}

export default function LineChart(props: LineChartProps) {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.year.code - 1,
                data: props.last,
                fill: false,
                borderColor: 'grey',
                tension: 0.4
            },
            {
                label: props.year.code,
                data: props.now,
                fill: false,
                borderColor: 'black',
                tension: 0.4
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
    return (
        <div className="card">
            <Chart type="line" data={data} options={options} />
        </div>
    );
}
