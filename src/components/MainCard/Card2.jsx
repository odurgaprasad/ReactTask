import "./Card2.css";

const Card2 = () => {
  return (
    <div className="catura-container">
      <div className="ask-catura">
        <div className="header">
          <span>Ask Catura</span>
          <div className="options">
            <button className="whatsapp">WhatsApp</button>
            <button className="greetings">Greetings</button>
          </div>
        </div>
        <div className="greeting-template">
          <p>
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus...
          </p>
          <div className="template-actions">
            <button>Copy to Send</button>
            <button>Preview</button>
          </div>
        </div>
        <div className="input-section">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button">Send</button>
        </div>
      </div>

      <div className="action-launcher">
        <h3>Action Launcher</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search actions..." />
        </div>
        <div className="actions">
          <button className="add-action">Add Action</button>
          <button>Fee Reversal</button>
          <button>Retail Onboarding</button>
          <button>Address Update</button>
        </div>
      </div>

      <div className="case-favorite">
        <h3>Case Favorite</h3>
        <div className="case">
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          <span>Photo</span>
        </div>
        <div className="case">
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
