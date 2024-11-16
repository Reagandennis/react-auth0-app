import React from 'react';

const Reports = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Generate Reports</h1>
      <p className="text-lg">Select the type of report you want to generate.</p>

      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="reportType" className="block text-lg">Select Report Type</label>
          <select id="reportType" className="w-full p-3 border rounded-md">
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
            <option value="print">Print</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white p-3 rounded-md">Generate Report</button>
      </form>
    </div>
  );
};

export default Reports;
