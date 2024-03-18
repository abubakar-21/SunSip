import { useState } from 'react';
import SalesChart from './salesChart';

const Sales = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="Sales flex ml-[250px] flex-col flex-1 min-h-screen min-w-screen bg-[#F3F5F9]">
      <div className="ml-[5px] mt-[150px]">
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlePeriodChange('daily')}>Daily</button>
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlePeriodChange('monthly')}>Monthly</button>
        <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlePeriodChange('yearly')}>Yearly</button>
      </div>
      <SalesChart selectedPeriod={selectedPeriod} />
    </div>
  );
};

export default Sales;
