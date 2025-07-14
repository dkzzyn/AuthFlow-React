import React from 'react';
import  './Dashboard.css'; 
import SideBar from '../../components/SideBar/SideBar';
import PieChart from '../../components/Grafics/PieChart';
import BarChart from '../../components/Grafics/BarChart';


function Dashboard() {
  return (
    <div >
      <section>
        <SideBar />
      </section>
      <section className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="dashboard-charts">
          <PieChart/>
          <BarChart />
        </div>
      </section>

      <footer className="dashboard-footer">

      </footer>
    </div>
  );
}

export default Dashboard;