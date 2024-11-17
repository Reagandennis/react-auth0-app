import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrialBalance = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    amount: '',
    year: '',
    type: 'debit', // Default type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.id || !formData.name || !formData.amount || !formData.year) {
      alert('Please fill in all fields');
      return;
    }

    setRecords([...records, { ...formData, amount: parseFloat(formData.amount) }]);
    setFormData({ id: '', name: '', amount: '', year: '', type: 'debit' }); // Reset form
  };

  const calculateTotal = (type) => {
    return records
      .filter((record) => record.type === type)
      .reduce((sum, record) => sum + record.amount, 0);
  };

  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/trial-balance" className="hover:underline">
              Trial Balance
            </Link>
          </li>
          <li>
            <Link to="/invoice-generator" className="hover:underline">
              Invoice Generator
            </Link>
          </li>
          <li>
            <Link to="/reports" className="hover:underline">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:underline">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-bold mb-4">Trial Balance</h2>
        <p>View and manage your trial balance records here.</p>

        {/* Input Form */}
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="ID"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Account Name"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              className="p-2 border rounded"
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Trial Balance Table */}
        <div className="mt-6">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Year</th>
                <th className="border p-2">Debit</th>
                <th className="border p-2">Credit</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{record.id}</td>
                  <td className="border p-2">{record.name}</td>
                  <td className="border p-2">{record.year}</td>
                  <td className="border p-2">{record.type === 'debit' ? record.amount.toFixed(2) : '-'}</td>
                  <td className="border p-2">{record.type === 'credit' ? record.amount.toFixed(2) : '-'}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-bold">
                <td className="border p-2" colSpan="3">Total</td>
                <td className="border p-2">{calculateTotal('debit').toFixed(2)}</td>
                <td className="border p-2">{calculateTotal('credit').toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Export Options */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => alert('Export to Excel feature coming soon!')}
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Export to Excel
          </button>
          <button
            onClick={() => alert('Export to PDF feature coming soon!')}
            className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            Export to PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialBalance;
