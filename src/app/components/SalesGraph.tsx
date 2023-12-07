"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartOptions, ChartData } from 'chart.js';
import 'chartjs-adapter-moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

interface SaleData {
  date: string;
  sales: number;
  sumSales: number;
}

interface SalesGraphProps {
  salesData: SaleData[];
}

const SalesGraph: React.FC<SalesGraphProps> = ({ salesData }) => {
  const labels = salesData.map(data => data.date);
  const sales1 = salesData.map(data => data.sales);
  const sales2 = salesData.map(data => data.sumSales); // 仮の計算

  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: '日次売り上げ',
        data: sales1,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        fill: true
      },
      {
        label: '累積売り上げ',
        data: sales2,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
        fill: true
      }
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'YYYY-MM-DD',
        },
        title: {
          display: true,
          text: '日付'
        }
      },
      y: {
        title: {
          display: true,
          text: '売り上げ部数'
        }
      }
    },
  };

  return <Line data={data} options={options} />;
};


export default SalesGraph;
