// src/components/PieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['Produto A', 'Produto B', 'Produto C'],
    datasets: [
      {
        label: 'Vendas por Produto',
        data: [300, 500, 200],
        backgroundColor: ['#1abc9c', '#3498db', '#e74c3c'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-container">
      <h3 className="pie-title">Vendas por Produto</h3>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
