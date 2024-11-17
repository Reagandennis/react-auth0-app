import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TrialBalance from './TrialBalance';
import InvoiceGenerator from './InvoiceGenerator';
import FinancialSummary from './FinancialSummary';
import GenerateReports from './GenerateReports';

const Dashboard = () => {
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
