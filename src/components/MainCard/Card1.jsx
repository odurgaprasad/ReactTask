import "./Card1.css";

const Card1 = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <div className="tabs">
          <span>Conversation</span>
          <span>Address Update</span>
          <span>Fee Reversal</span>
          <span>Retention</span>
        </div>
        <button className="escalate-button">Escalate</button>
      </div>
      <div className="chat-box">
        <div className="message">
          <div className="sender-info">
            <span className="sender-name">Kadabathula Bhanu</span>
            <span className="message-time">9:08 PM • Received By WhatsApp</span>
          </div>
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
            aliquam...
          </div>
        </div>
        <div className="message">
          <div className="sender-info">
            <span className="sender-name">HK</span>
            <span className="message-time">27Jul, 2024 • Sent By WhatsApp</span>
          </div>
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
            aliquam...
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="input-section">
          <input type="text" placeholder="Type a message..." />
          <div className="send-options">
            <button className="option-button">WhatsApp</button>
            <button className="option-button1">Email</button>
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
