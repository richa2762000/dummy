import React from "react";
import "./Cont3.css";
import { Link } from "react-router-dom";
function Cont3() {
  return (
    <>
      <div className="cont3">
        <div className="cont3_top">
          <div className="cont3_top_left">
            <h3>Favourite Links</h3>
          </div>
          <div className="cont3_top_rights">
            <h3>Favourite Files</h3>
          </div>
        </div>
        <div className="cont3_center">
          <div className="cont3_center_data">
            <h4>Mr. Arthur Christopher Testing Link Name</h4>
            <p>11/15/2022 5:10 PM</p>
          </div>
          <div className="cont3_center_details">
            <p>
              Figma is a leading design software, helping teams and individuals
              create designs faster
            </p>
            <p>
              <Link to="https://www.businessnext.com/about-us">
                https://www.businessnext.com/about-us
              </Link>
            </p>
          </div>
        </div>
        <div className="cont3_bottom">
          <div className="cont3_bottom_data">
            <h4>Praveen Singh Title Link Name</h4>
            <p>11/15/2022 5:10 PM</p>
          </div>
          <div className="cont3_bottom_details">
            <p>
              I want to share my exploration for Merger - Community
              Platform.Hope you like it!
            </p>
            <p>
              <Link to="https://www.businessnext.com/about-us">
                https://www.businessnext.com/about-us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont3;
