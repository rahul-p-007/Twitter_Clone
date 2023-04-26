import React from "react";
import "./Style/Sidebar.css";
import { Link } from "react-router-dom";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from "@material-ui/icons";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption/SidebarOption";
import {signOut} from "firebase/auth"
import { auth } from "../../../firebase";
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/reducer';
import SignOut from "../../Button/SignOut/SignOut";
const Siderbar = () => {
  const [state,dispatch] = useStateValue();
  const signout = async() =>{
    await signOut(auth);
    dispatch({
            type : actionTypes.SET_USER,
            user:null,
          })
  }
  return ( 
    <div className="sidebar">
      {/* Twitter icon */}
      <Twitter className="sidebar__twitterIcon" />
      {/* SiderbarOption */}
      <SidebarOption active Icon={Home} text="Home" />
      <Link to="/explore" style={{color: "black",textDecoration: "none" }}>
        <SidebarOption Icon={Search} text="Explore" />
      </Link>
      <SidebarOption Icon={NotificationsNone} text="Notification" />
      <SidebarOption Icon={MailOutline} text="Mail" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmark" />
      <SidebarOption Icon={ListAlt} text="List" />
      <SidebarOption Icon={PermIdentity} text="profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />
      <button className="SignOut" style={{
        background: "none",outline:"none",border:"none"
      }} onClick={signout}>
        
      <SignOut Icon={ExitToAppIcon} text = "Sign Out" />
      </button>
      {/* Button-> Tweet */}

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Siderbar;
