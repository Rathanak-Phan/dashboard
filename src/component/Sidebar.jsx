import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div>
      <aside>
        <div className="profile-section">
          <div className="d-flex justify-content-between profile">
            <img 
              src="https://scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/326740429_1933386307027242_4544503231498968043_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExJ2kgn8dc8nFJs1CXRIr5rxABM_T-NmevEAEz9P42Zw5OtBNCgsVgHYC_DsZKm1tKepH7HhIOQBJm2yOfIGWP&_nc_ohc=5bAIfCIPn58Q7kNvgEVblB5&_nc_zt=23&_nc_ht=scontent.fpnh18-5.fna&_nc_gid=Ah7bDcc_vq5HDpYZMHNMp9i&oh=00_AYDSpH6_ZGrRPtm9xycysWiCuJTwcCVc_IzklqF5H8e7jA&oe=675EEC98"
              alt="Profile"
              className="profile-image me-5"
            />
            <p className="custom-font-size">Dashboard</p>
          </div>
          <ul className="list-unstyled fs-3 my-overline">
            <li><i className="fa-solid fa-house me-5"></i> Home</li> {/* Home icon */}
            <li><i className="fa-solid fa-user me-5"></i> Profile</li> {/* User icon */}
            <li><i className="fa-regular fa-image me-5"></i> Wallet</li> {/* Image icon */}
            <li><i className="fa-solid fa-chart-line me-5"></i> Analytics</li> {/* Chart icon */}
            <li><i className="fa-solid fa-list-check me-5"></i> Tasks</li> {/* Tasks icon */}
            <li><i className="fa-solid fa-gear me-5"></i> Settings</li> {/* Gear icon */}
            <li><i className="fa-solid fa-circle-question me-5"></i> Help</li> {/* Help icon */}
          </ul>
        </div>
        <h3><i className="fa-solid fa-right-from-bracket me-5"></i>Log out</h3>
      </aside>
    </div>
  );
}
