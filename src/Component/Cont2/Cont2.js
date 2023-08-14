import React from "react";
import "./Cont2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function Cont2() {
  return (
    <>
      <div className="cont2">
        <div className="cont2_top">
          <h2>Group & Follower Details</h2>
          <div className="cont2_top_data">
            <p className="grps">Groups</p>
            <p>Following</p>
            <p>Followers</p>
          </div>
        </div>
        <div className="cont2_center">
          <div>
            <input placeholder="Search"/>
            <span class="search-icon"></span>
            {/* <FontAwesomeIcon icon={faPlusSquare} className="plus"/> */}
          </div>
          <div>
          <FontAwesomeIcon icon={faPlusSquare} className="plus"/>
          </div>
        </div>
        <div className="cont2_bottom">
          <div className="cont2_bottom1">
            <div className="cont2_bottom_img">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg"
                alt="loadig"
              />
            </div>
            <div className="cont2_bottom_data">
              <p className="sale">Sales & Marketing</p>
              <p className="grp">14 people in group</p>
            </div>
          </div>
          <hr />
          <div className="cont2_bottom2">
            <div className="cont2_bottom_img">
              <img
                src="https://www.developeronrent.com/blogs/wp-content/uploads/2020/02/Product-Development-Team.jpg"
                alt="loadig"
              />
            </div>
            <div className="cont2_bottom_data">
              <p className="sale">Product Development Group</p>
              <p className="grp">23 people in group</p>
            </div>
          </div>
          <hr />
          <div className="cont2_bottom3">
            <div className="cont2_bottom_img">
              <img
                src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
                alt="loadig"
              />
            </div>
            <div className="cont2_bottom_data">
              <p className="sale">People & Culture</p>
              <p className="grp">23 people in group</p>
            </div>
          </div>
          <hr />
          <div className="cont2_bottom4">
            <div className="cont2_bottom_img">
              <img
                src="https://cdn.pixabay.com/photo/2018/11/07/18/55/turkey-3801007_1280.jpg"
                alt="loadig"
              />
            </div>
            <div className="cont2_bottom_data">
              <p className="sale">Angry Birds</p>
              <p className="grp">23 people in group</p>
            </div>
          </div>
          <hr />
          <div className="cont2_bottom5">
            <div className="cont2_bottom_img">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg"
                alt="loadig"
              />
            </div>
            <div className="cont2_bottom_data">
              <p className="sale">Office Party</p>
              <p className="grp">23 people in group</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont2;
