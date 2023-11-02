import React, { useState } from 'react';

const AdminTable = ({ admins, handleAddProduct, handleEditProduct, handleDeleteProduct, handleDeleteAdmin }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  const openDeleteModal = (adminId) => {
    setSelectedAdminId(adminId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedAdminId(null);
    setShowDeleteModal(false);
  };

  const confirmDeleteAdmin = () => {
    if (selectedAdminId) {
      handleDeleteAdmin(selectedAdminId);
      closeDeleteModal();
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Admin</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="px-6 py-4 whitespace-nowrap">{admin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => openDeleteModal(admin.id)} className="text-red-500 hover:underline cursor-pointer">
                  Delete Admin
                </button>
              </td>
               <td className="px-6 py-4 whitespace-nowrap">
                {admin.status === 'Active' ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span>Add Product</span>
                  <input type="checkbox" checked={admin.addProduct} onChange={() => handleAddProduct(admin.id)} />
                </div>
                <div className="flex items-center space-x-2">
                  <span>Edit Product</span>
                  <input type="checkbox" checked={admin.editProduct} onChange={() => handleEditProduct(admin.id)} />
                </div>
                <div className="flex items-center space-x-2">
                  <span>Delete Product</span>
                  <input type="checkbox" checked={admin.deleteProduct} onChange={() => handleDeleteProduct(admin.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-64 mx-auto rounded shadow-lg z-50">
            <div className="relative w-64 p-6">
              <p className="text-gray-800 text-sm">Are you sure you want to delete this admin?</p>
              <div className="mt-4 flex justify-end">
                <button onClick={confirmDeleteAdmin} className="text-red-600 hover:underline">Yes</button>
                <button onClick={closeDeleteModal} className="ml-2 text-gray-600 hover:underline">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
