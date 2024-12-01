import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <input
          type="text"
          placeholder="Chat / Feed chat"
          className="search-bar"
        />
        <div className="user-info">
          <button className="process-owner-btn">Process Owner HOD</button>
          <span className="admin-badge">Admin</span>
          <span className="user-name">ODP</span>
          <img
            src="https://www.shutterstock.com/image-vector/odp-letter-monogram-logo-design-260nw-2021735195.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <div className="tabs-line">
        <div className="tab-container">
          <div className="tab active">Cheyenne Bergson</div>
          <div className="tab">Jonathan Higgins</div>
          <div className="tab">Capt. Trunk</div>
          <div className="tab">Hannibal Smith</div>
        </div>
        <div className="action-container">
          <button className="messaging-btn">Messaging</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
