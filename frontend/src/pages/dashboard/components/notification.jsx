import React from 'react';

const NotificationPanel = ({ notifications, isOpen }) => (
  <div className={`notification-panel ${isOpen ? 'block' : 'hidden'} absolute bg-red-300 border rounded-md border-red-500 p-2 mt-2 z-10 w-28 `}>
    <h2 className="text-sm font-semibold underline mb-3">Notifications</h2>
    <ul className="text-sm ">
      {notifications.map((notification, index) => (
        <li  className='mb-2 ' key={index}>{notification}</li>
      ))}
    </ul>
  </div>
);

export default NotificationPanel;
