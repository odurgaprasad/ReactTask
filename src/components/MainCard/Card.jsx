import "./Card.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { FaCirclePlus } from "react-icons/fa6";

const Card = () => {
  const data = {
    name: "Hannibal Smith",
    address: "1 Market Street San Francisco, CA 94105",
    customerID: "12345",
    email: "rachel@sample.com",
    phone: "8051289805",
    loyaltyTier: "Silver",
    segment: "Sleepy Customer",
    lifetimeValue: "$1 M",
    propensity: "75%",
    engagement: "80%",
  };

  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <div className="avatar">CB</div>
          <div className="card-section">
            <h3 className="avatar-heading">{data.name}</h3>
            <p className="avatar-description">{data.address}</p>
          </div>
        </div>

        <div className="card-section">
          <div className="card-row">
            <span>Customer ID</span>
            <strong>{data.customerID}</strong>
          </div>
          <div className="card-row">
            <span>Email Address</span>
            <strong>{data.email}</strong>
          </div>
          <div className="card-row">
            <span>Phone Number</span>
            <strong>{data.phone}</strong>
          </div>
          <div className="add-row">
            <FaCirclePlus /> Add
          </div>
        </div>

        <div className="card-section">
          <div className="card-row">
            <span>Loyalty Tier</span>
            <strong>{data.loyaltyTier}</strong>
          </div>
          <div className="card-row">
            <span>Segment</span>
            <strong>{data.segment}</strong>
          </div>
          <div className="add-row">
            <FaCirclePlus /> Add
          </div>
        </div>

        <div className="card-section">
          <div className="card-row">
            <span>Lifetime Value</span>
            <strong>{data.lifetimeValue}</strong>
          </div>
          <div className="card-row">
            <span>Propensity to Purchase</span>
            <div className="progress">
              <span
                className="progress-bar"
                style={{ width: data.propensity }}
              ></span>
              <span>{data.propensity}</span>
            </div>
          </div>
          <div className="add-row">
            <FaCirclePlus /> Add
          </div>
        </div>

        <div className="card-section">
          <div className="card-row">
            <span>Engagement Score</span>
            <div className="progress">
              <span
                className="progress-bar green"
                style={{ width: data.engagement }}
              ></span>
              <span>{data.engagement}</span>
            </div>
          </div>
          <div className="add-row">
            <FaCirclePlus /> Add
          </div>
        </div>

        <div className="card-footer">
          <button className="assign-btn">Assign other Agent</button>
          <button className="add-widget-btn">Add New Widget</button>
        </div>
      </div>
      <Card1 />
      <Card2 />
    </div>
  );
};

export default Card;
