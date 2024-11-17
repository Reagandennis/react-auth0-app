import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TrialBalance from './TrialBalance';
import InvoiceGenerator from './InvoiceGenerator';
import FinancialSummary from './FinancialSummary';
import GenerateReports from './GenerateReports';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Dummy data for invoices and trial balance
  const [invoiceData, setInvoiceData] = useState({
    invoices: 10, // Total number of invoices
    amount: 5000, // Total amount from invoices
  });

  const [trialBalanceData, setTrialBalanceData] = useState({
    debits: 10000, // Total debits in the trial balance
    credits: 8000, // Total credits in the trial balance
  });

  useEffect(() => {
    // Fetch or update data dynamically from your server here
  }, []);

  // Graph Data for Invoices
  const invoiceGraphData = {
    labels: ['Invoices', 'Amount'],
    datasets: [
      {
        data: [invoiceData.invoices, invoiceData.amount],
        backgroundColor: ['#4caf50', '#2196f3'],
        borderWidth: 0,
      },
    ],
  };

  // Graph Data for Trial Balance
  const trialBalanceGraphData = {
    labels: ['Debits', 'Credits'],
    datasets: [
      {
        data: [trialBalanceData.debits, trialBalanceData.credits],
        backgroundColor: ['#f44336', '#ffeb3b'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Menu */}
      <aside className="bg-gray-800 text-white w-64 p-4 space-y-6">
        <h2 className="text-2xl font-bold">Menu</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/trial-balance" className="text-blue-600 hover:underline">
                Trial Balance
              </Link>
            </li>
            <li>
              <Link to="/dashboard/invoice-generator" className="block hover:underline">
                Invoice Generator
              </Link>
            </li>
            <li>
              <Link to="/dashboard/financial-summary" className="block hover:underline">
                Financial Summary
              </Link>
            </li>
            <li>
              <Link to="/dashboard/report" className="block hover:underline">
                Generate Reports
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

        {/* Invoice Graph */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Invoices Overview</h3>
          <div className="bg-white p-4 rounded shadow-md">
            <Doughnut data={invoiceGraphData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Trial Balance Graph */}
        <div>
          <h3 className="text-xl font-semibold">Trial Balance Overview</h3>
          <div className="bg-white p-4 rounded shadow-md">
            <Doughnut data={trialBalanceGraphData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <Routes>
          <Route path="trial-balance" element={<TrialBalance />} />
          <Route path="invoice-generator" element={<InvoiceGenerator />} />
          <Route path="financial-summary" element={<FinancialSummary />} />
          <Route path="report" element={<GenerateReports />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
