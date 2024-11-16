import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.name}</h1>
      <p className="text-lg">Here is your organization's financial information.</p>

      {/* Display more data or add forms to update data */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
        <p>Email: {user?.email}</p>
        <p>Picture: <img src={user?.picture} alt="User Profile" /></p>
      </div>
    </div>
  );
};

export default Dashboard;
