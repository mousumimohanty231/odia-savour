import React from 'react';
import profileImage from '../../assets/profile_image.png'; // adjust path if needed

const Header = () => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white',
      padding: '20px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <h1 style={{ margin: 0, fontWeight: 'bold', color: 'red' }}>ODIA-SAVOUR</h1>
        <p style={{ margin: 0, fontSize: '14px', color: 'black', fontWeight: '500' }}>ADMIN PANEL</p>
      </div>
      <img src={profileImage} alt="User" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
    </div>
  );
};

export default Header;
