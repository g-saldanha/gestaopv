import React from 'react';
import { Chart } from 'primereact/chart';

interface LineChartProps {
    now: number[];
    last: number[];
    labels: string[];
    totais: Metrics.CultosTotais;
    year: any;
    veryLast: number[],
}

export default function LineChart(props: Readonly<LineChartProps>) {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.year - 2,
                data: props.veryLast,
                fill: false,
                backgroundColor: '#ADD8E6',
                borderColor: '#ADD8E6',
                tension: 0.4
            },
            {
                label: props.year - 1,
                data: props.last,
                fill: false,
                backgroundColor: '#90EE90',
                borderColor: '#90EE90',
                tension: 0.4
            },
            {
                label: props.year,
                data: props.now,
                fill: false,
                backgroundColor: '#FFA07A',
                borderColor: '#FFA07A',
                tension: 0.4
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: `Média por culto ${Math.round(props.totais.now.total / props.totais.now.cultos)}`
                },
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
