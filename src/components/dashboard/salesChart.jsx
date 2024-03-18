import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';

Chart.register(...registerables);

function SalesChart({ selectedPeriod }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchDataForPeriod = async () => {
      switch (selectedPeriod) {
        case 'daily':
          return [0, 200, 150, 300, 250]; 
        case 'monthly':
          return [1000, 1500, 1200, 1800, 2000]; 
        case 'yearly':
          return [2500, 6500, 9000, 12000, 21000, 25000, 18000, 19000, 20000, 21000, 23000, 24000, 28000, 30000, 32000]; // Sample yearly sales data
        default:
          return [];
      }
    };
  
    const fetchData = async () => {
      const data = await fetchDataForPeriod();
      let labels = [];
  
      switch (selectedPeriod) {
        case 'daily':
          labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
          break;
        case 'monthly':
          labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
          break;
        case 'yearly':
          labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          break;
        default:
          labels = [];
          break;
      }
  
      if (chartRef.current) {

        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }
  
        const ctx = chartRef.current.getContext('2d');
        chartRef.current.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: `Sales (${selectedPeriod})`,
              data: data,
              fill: false,
              borderColor: 'rgb(59,130,246)',
              tension: 0.1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    };
  
    fetchData();
  }, [selectedPeriod]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}

export default SalesChart;
