
import React from 'react';
import Table from './Table';

const UserPage = () => {
  const employeesData = []; 

  return (
    <div>
      <h2>User Page</h2>
      <Table data={employeesData} onDelete={() => {}} />
    </div>
  );
};

export default UserPage;