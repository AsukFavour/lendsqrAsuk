import Logoicon from "../../images/Union.png";
import Logoname from "../../images/lendsqr.png";
import usericon from "../../images/image 4.png";
import { Link } from "react-router-dom";
import "./TopNavbar.scss";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


type Props = {};

const TopNavbar = (props: Props) => {
  return (
    <header id="top-header">
      <div className="container">
        <nav className="flex-between">
          <div className="nav-image-container">
            <Link to={"/Users"} id="logo">
              <img src={Logoicon} />
              <img src={Logoname} />
            </Link>
          </div>

          <div className="nav-main-container flex-between">
            <div id="search-bar-container">
              <input
                type="text"
                placeholder="Search for anything"
                id="search-bar"
              />
              <button><SearchRoundedIcon  sx={{ color:"#FFFFFF" }} fontSize="large" /></button>
            </div>

            <div className="flex-between right-nav-menu">
              <Link to={"/Users"} className="docs">Docs</Link>
              <p className="notifications"><NotificationsNoneOutlinedIcon  sx={{ color:"#213F7D" }} fontSize="large"/></p>
              <div className="flex-between">
                <img src={usericon} className="profile-icon" />
                <p>
                <Link to="/login">Adedeji</Link> <span><ArrowDropDownOutlinedIcon fontSize="large"/></span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopNavbar;
