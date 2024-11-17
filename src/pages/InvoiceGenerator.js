import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

const InvoiceGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    address: '',
    date: '',
    item: '',
    quantity: '',
    price: '',
    total: 0,
    items: [],
  });

  const handleChange = (e) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    const total = parseFloat(invoiceData.quantity) * parseFloat(invoiceData.price);
    setInvoiceData({
      ...invoiceData,
      total,
      items: [
        ...(invoiceData.items || []),
        { item: invoiceData.item, quantity: invoiceData.quantity, price: invoiceData.price, total },
      ],
      item: '',
      quantity: '',
      price: '',
    });
  };

  const calculateTotalAmount = () => {
    return (invoiceData.items || []).reduce((sum, item) => sum + item.total, 0);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    // Adding title and invoice details
    doc.text('Invoice', 14, 20);
    doc.text(`Client: ${invoiceData.clientName}`, 14, 30);
    doc.text(`Address: ${invoiceData.address}`, 14, 40);
    doc.text(`Date: ${invoiceData.date}`, 14, 50);

    // Adding items table
    let yOffset = 60;
    doc.text('Item', 14, yOffset);
    doc.text('Quantity', 60, yOffset);
    doc.text('Price', 100, yOffset);
    doc.text('Total', 140, yOffset);
    yOffset += 10;

    invoiceData.items.forEach(item => {
      doc.text(item.item, 14, yOffset);
      doc.text(item.quantity.toString(), 60, yOffset);
      doc.text(item.price.toString(), 100, yOffset);
      doc.text(item.total.toFixed(2), 140, yOffset);
      yOffset += 10;
    });

    // Adding total amount
    doc.text(`Total Amount: ${calculateTotalAmount().toFixed(2)}`, 14, yOffset + 10);

    // Save the PDF
    doc.save('invoice.pdf');
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      ['Item', 'Quantity', 'Price', 'Total'],
      ...invoiceData.items.map(item => [item.item, item.quantity, item.price, item.total.toFixed(2)]),
    ]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoice');

    XLSX.writeFile(wb, 'invoice.xlsx');
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
        <h2 className="text-3xl font-bold mb-4">Invoice Generator</h2>
        <p>Generate invoices for your clients and partners.</p>

        {/* Company Logo */}
        <div className="flex justify-center my-6">
          <img
            src="logo.png" // Replace with actual logo
            alt="Company Logo"
            className="h-20"
          />
        </div>

        {/* Invoice Form */}
        <div className="mt-6 bg-gray-100 p-6 rounded shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="clientName"
              value={invoiceData.clientName}
              onChange={handleChange}
              placeholder="Client Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="address"
              value={invoiceData.address}
              onChange={handleChange}
              placeholder="Client Address"
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="date"
              value={invoiceData.date}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>

          {/* Item Input */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <input
              type="text"
              name="item"
              value={invoiceData.item}
              onChange={handleChange}
              placeholder="Item"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="quantity"
              value={invoiceData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={invoiceData.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-2 border rounded"
            />
            <button
              onClick={handleAddItem}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition col-span-3"
            >
              Add Item
            </button>
          </div>

          {/* Invoice Items Table */}
          <div className="mt-6">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border p-2">Item</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {(invoiceData.items || []).map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{item.item}</td>
                    <td className="border p-2">{item.quantity}</td>
                    <td className="border p-2">{item.price}</td>
                    <td className="border p-2">{item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Amount */}
          <div className="mt-6 text-right">
            <p className="font-bold text-lg">
              Total Amount: <span className="text-xl">{calculateTotalAmount().toFixed(2)}</span>
            </p>
          </div>

          {/* Digital Stamp */}
          <div className="flex justify-center mt-8">
            <div className="bg-blue-500 text-white p-4 rounded-full text-xl font-bold shadow-md">
              Digital Stamp
            </div>
          </div>

          {/* Generate Invoice Buttons */}
          <div className="mt-6 flex justify-between space-x-4">
            <button
              onClick={exportToPDF}
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
            >
              Generate PDF
            </button>
            <button
              onClick={exportToExcel}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
            >
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
