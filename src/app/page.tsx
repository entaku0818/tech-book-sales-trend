import React from 'react';
import dynamic from 'next/dynamic';

const DynamicSalesGraph = dynamic(() => import('./components/SalesGraph'), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const salesData = [
    { date: '2023-11-11', sales: 137 },
    { date: '2023-11-12', sales: 200 },
    { date: '2023-11-13', sales: 43 },
    { date: '2023-11-14', sales: 20 },
    { date: '2023-11-15', sales: 10 },
    { date: '2023-11-16', sales: 9 },
    { date: '2023-11-17', sales: 7 },
    { date: '2023-11-18', sales: 6 },
    { date: '2023-11-19', sales: 12 },
    { date: '2023-11-20', sales: 5 },
    { date: '2023-11-21', sales: 3 },
    { date: '2023-11-22', sales: 27 },
    { date: '2023-11-23', sales: 12 },
    { date: '2023-11-24', sales: 10 },
    { date: '2023-11-25', sales: 30 },
    { date: '2023-11-26', sales: 47 },
    { date: '2023-11-27', sales: 9 }
    // 他の日付のデータ...
  ];
  
  let sum = 0;
  const sumSales = salesData.map(item => {
    sum += item.sales;
    return { ...item, sumSales: sum };
  });

  console.log(sumSales);
  

  return (
    <div>
      <h1>エンジニアと人生技術書典の本売上推移グラフ</h1>
      <DynamicSalesGraph salesData={sumSales} />
    </div>
  );
};

export default HomePage;

