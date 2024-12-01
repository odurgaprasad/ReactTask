import "./sidebar.css";
import { AiOutlineFileSearch, AiOutlineUser } from "react-icons/ai";
import { FiSettings, FiBox, FiActivity } from "react-icons/fi";
import {
  BsClipboardData,
  BsListCheck,
  Bs1Circle,
  Bs2Circle,
} from "react-icons/bs";
import { MdOutlineQueue } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/2256/f75b/28fdeb1cca31293321203f289a781c25?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JcHHj9Xx-7qoA9QPQFRIbI67AjYdCBuA6t9hwSePizTdQRTC-Tuz-6V58rUCEHtza-cS7Tmf2RA2l~lEiWmrBkhEfd7IGqPb1S30ZvUOqtBcV1IeXxahNykviJGuVs4EOhxPUgSXml15Eu8QZwtvzPIr7QQriq0ZnsYLtgL3a60XFZE8ojxLBLPvaivwBSKVwlsbs59Ka-oJ032~aa49TeLuNrzqTDObKaMdoU5DxnzQTZifbCncsDFbDV-TWH~DzVB6lSmOHALk9UBvrLFCUntc-uCP~zpf~uIPdlplhOoJ0O498OYf-NTUo4pti2B98uFTmNZZnby9do6qbKqwTg__"
          alt="Risk Hawk"
          className="logo"
        />
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <AiOutlineFileSearch className="icon" />
          <span>Internal Audit</span>
        </div>
        <div className="menu-item">
          <FiSettings className="icon" />
          <span>UAT Testing</span>
        </div>
        <div className="menu-item">
          <FiBox className="icon" />
          <span>Intract</span>
        </div>
        <div className="menu-item active">
          <MdOutlineQueue className="icon" />
          <span>Queue</span>
        </div>
        <div className="menu-item">
          <BsClipboardData className="icon" />
          <span>Workflow</span>
        </div>
        <div className="menu-item">
          <AiOutlineUser className="icon" />
          <span>Admin</span>
        </div>
        <div className="menu-item">
          <FiActivity className="icon" />
          <span>Asset</span>
        </div>
        <div className="menu-item">
          <FaTools className="icon" />
          <span>Parent</span>
        </div>
        <div className="menu-item">
          <Bs1Circle className="icon" />
          <span>Option 1</span>
        </div>
        <div className="menu-item">
          <Bs2Circle className="icon" />
          <span>Option2</span>
        </div>
        <div className="menu-item">
          <BsListCheck className="icon" />
          <span>All Accessories</span>
        </div>
        <div className="menu-item">
          <AiOutlineFileSearch className="icon" />
          <span>Internal Audit</span>
        </div>
        <div className="menu-item">
          <FaTools className="icon" />
          <span>Decorating</span>
        </div>
        <div className="menu-item">
          <FiSettings className="icon" />
          <span>Presenting</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
