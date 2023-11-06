import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserData, deleteUserData, fetchUserData, updateUserData } from '../../../redux/userSlice';

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('user');
  const [editingUserId, setEditingUserId] = useState(null);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  const token = localStorage.getItem('token');
  
  const headers ={
    'Authorization': `Bearer ${token}`
   }

  useEffect(() => {
    if (editingUserId !== null) {
      const editingUser = data.find(user => user._id === editingUserId);
      if (editingUser) {
        setName(editingUser.name);
        setEmail(editingUser.email);
        setPhoneNumber(editingUser.phoneNumber);
        setPassword(editingUser.password); 
      }
    }
  }, [editingUserId, data]);

  const changeState = () => {
    console.log(`${token}`)
    dispatch(fetchUserData(headers));
  };

  const updateUserObject = {
    name,
    email,
    password,
    phoneNumber,
    role
  };
  const userDataObject = {
    name,
    email,
    password,
    phoneNumber
  };

  
  const addData = () => {
    dispatch(addUserData(userDataObject));
    dispatch(fetchUserData(headers));
    clearForm();
  };

  const updateData = () => {
    if (editingUserId !== null) {
      dispatch(updateUserData({ id: editingUserId, updatedData: updateUserObject ,headers:headers }));
      dispatch(fetchUserData(headers));
      clearForm();
    }
  };

  const deleteData = (id) => {
    dispatch(deleteUserData({id,headers}));
    dispatch(fetchUserData(headers));
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setEditingUserId(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">{editingUserId ? 'Edit User' : 'Add New User'}</h1>
      <div className="flex flex-col space-y-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
        />
        {editingUserId ? (
            <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-md px-3 py-2 border focus:outline-none focus:border-blue-500"
          />
        ):''}
        
      </div>
      <div className="flex space-x-4">
        {editingUserId ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={updateData}
          >
            Update User
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
            onClick={addData}
          >
            Add User
          </button>
        )}
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
          onClick={changeState}
        >
          Get All Data
        </button>
      </div>

      <h2 className="text-2xl mt-8 mb-4">Users List</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phoneNumber}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-red-600 hover:text-red-800 mr-2"
                  onClick={() => deleteData(user._id)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setEditingUserId(user._id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
