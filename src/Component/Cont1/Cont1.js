import React from "react";
import "./Cont1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'

function Cont1() {
  return (
    <>
      <div className="cont1">
        <div className="cont1_top">
          <div className="cont1_top_left">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80s"
              alt="Avatar"
            />
          </div>
          <div className="cont1_top_right">
            <h4>Mr. Arthur Christopher</h4>
            <p>Acidaes Solutions PVT LTD <FontAwesomeIcon icon={faCircleInfo} className="info"/></p>
            <div className="cont1_top_right_foll">
              <p>34 Following</p>
              <p>85 Followers</p>
              <p>0 Groups</p>
            </div>
          </div>
        </div>
        <div className="cont1_bottom">
          <button className="cont1_bottom_grp"><FontAwesomeIcon icon={faUserGroup}/> Groups</button>
          <button className="cont1_bottom_manager">
            <FontAwesomeIcon icon={faUser}/>Manager Users</button>
        </div>
      </div>
    </>
  );
}
export default Cont1;
