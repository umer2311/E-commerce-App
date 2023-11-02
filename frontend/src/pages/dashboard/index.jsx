import React, { useState } from 'react';
import TopNavbar from './components/navbar'; 
import AdminTable from './components/adminTable'; 

const Dashboard = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Admin 1', addProduct: false, editProduct: false, deleteProduct: false, status:"Active" },
    { id: 2, name: 'Admin 2', addProduct: false, editProduct: false, deleteProduct: false, status:"Inactive" },
  ]);

  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  const handleAddProduct = (adminId, checked) => {
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === adminId) {
        return { ...admin, addProduct: checked };
      }
      return admin;
    });
    setAdmins(updatedAdmins);
  };

  const handleEditProduct = (adminId, checked) => {
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === adminId) {
        return { ...admin, editProduct: checked };
      }
      return admin;
    });
    setAdmins(updatedAdmins);
  };

  const handleDeleteProduct = (adminId, checked) => {
 
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === adminId) {
        return { ...admin, deleteProduct: checked };
      }
      return admin;
    });
    setAdmins(updatedAdmins);
  };

  return (
    <div>
      <TopNavbar adminName="Super Admin" notifications={notifications} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Management</h1>
        <AdminTable
          admins={admins}
          handleAddProduct={handleAddProduct}
          handleEditProduct={handleEditProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default Dashboard;
