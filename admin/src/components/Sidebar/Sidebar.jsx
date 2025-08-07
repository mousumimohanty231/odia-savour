import React from 'react';
import { NavLink } from 'react-router-dom';

import addIcon from '../../assets/add_icon.png';
import listIcon from '../../assets/order_icon.png';
import ordersIcon from '../../assets/order_icon.png';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#FF5733' : 'black', // custom highlight color
    display: 'flex',
    alignItems: 'center',
    fontWeight: isActive ? 'bold' : 'normal' // optional for extra emphasis
  });

  return (
    <div style={{
      width: '200px',
      marginRight: '10px',
      backgroundColor: '#f5f5f5',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ marginBottom: '40px' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '30px' }}>
          <NavLink to="/add" style={linkStyle}>
            <img src={addIcon} alt="Add Items" style={{ width: '20px', marginRight: '10px' }} />
            Add Items
          </NavLink>
        </li>
        <li style={{ marginBottom: '30px' }}> {/* GAP between List and Orders */}
          <NavLink to="/list" style={linkStyle}>
            <img src={listIcon} alt="List" style={{ width: '20px', marginRight: '10px' }} />
            List Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" style={linkStyle}>
            <img src={ordersIcon} alt="Orders" style={{ width: '20px', marginRight: '10px' }} />
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
