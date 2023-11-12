import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../../assets/images/logo512.png';
import NotificationPanel from '../components/notification';

import {Link,useNavigate} from 'react-router-dom'

const TopNavbar = ({ adminName, notifications }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotificationPanel = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleSignout = () => {

  };

  return (

    <header className="bg-red-400 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white text-lg font-semibold">Amore</span>
      </div>
      <div className="flex items-center">
        <div className='flex items-center space-x-10 justify-between  p-10 text-white'>
        <Link as={Link} to='#' className="hover:text-gray-300 transition duration-300">
          Users
        </Link>
        <Link as={Link} to='/dashboard/products ' className="hover:text-gray-300 transition duration-300">
          Products
        </Link>
        <Link as={Link} to='/orders' className="hover:text-gray-300 transition duration-300">
          Orders
        </Link>
      </div>
      <div className="relative group mr-3">
        <button
          className="text-white hover:text-red-300 flex items-center"
          onClick={toggleNotificationPanel}
        >
          <div className="flex items-center">
            <i className="mr-2">
              <FontAwesomeIcon icon={faBell} />
            </i>
            <span className="notification-count ml-1">{notifications.length}</span>
          </div>
        </button>



        <NotificationPanel notifications={notifications} isOpen={isNotificationOpen} />



      </div>

      <div className="flex items-center">
        <img src={Avatar} alt={`${adminName}'s Avatar`}
          onClick={toggleProfileMenu} className="h-8 w-8 rounded-full mr-2" />
        <span className="text-white">{adminName}</span>
      </div>

      {isProfileMenuOpen && (
        <div className="absolute right-2 mt-2 bg-red-300 border rounded-md border-red-500 p-2 ">
          <ul className="text-sm">
            <li
              className="cursor-pointer flex items-center"
              onClick={handleSignout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Sign Out
            </li>
          </ul>
        </div>
      )}

    </div>
    </header >
  );
};

export default TopNavbar;