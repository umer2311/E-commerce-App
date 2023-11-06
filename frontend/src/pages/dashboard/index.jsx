import React, { useState } from 'react';
import TopNavbar from './components/navbar'; 
import AdminTable from './components/adminTable'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import thunkStore from "../../redux/store";
import User from './components/user'
import products from './components/products'
import orders from './components/orders'
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
    
      

    <Provider store={thunkStore}>
    
      <div>
        <TopNavbar adminName="Admin" notifications={notifications} />
        <User />
      
      
      </div>
   
  </Provider> 
  );
};

export default Dashboard;
