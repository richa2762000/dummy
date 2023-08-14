import React from "react";
import "./Cont4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faLink,
  faPlusCircle,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

function Cont4() {
  return (
    <>
      <div className="cont4">
        <form>
          <div className="res">
            <div>
              <label>Link Url</label> <br /> <br />
              <input placeholder="Enter Url" className="input" />
            </div>
            <br />
            <div>
              <label>Link Name</label>
              <br />
              <br />
              <input placeholder="Enter Display Name" className="input" />
              <br />
              <br />
            </div>
          </div>
          <div>
            <textarea placeholder="Description"></textarea>
          </div>
          <div className="radio">
            <p>
              <input type="radio" />
              <label>Visible to all</label>
            </p>
            <p>
              <input type="radio" />
              <label>Private</label>
            </p>
          </div>
          <div className="cont4_bottom">
            <div className="cont4_bottom_data">
              <p>
                <FontAwesomeIcon icon={faPlusCircle} className="fa" /> Post
              </p>
              <p className="link">
                <FontAwesomeIcon icon={faLink} className="fa" />
                Links
              </p>
              <p>
                <FontAwesomeIcon icon={faFile} className="fa" />
                Image/File upload
              </p>
              <p>
                <FontAwesomeIcon icon={faTasks} className="fa" />
                Task
              </p>
            </div>
            <div className="post">
              <p>Post</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Cont4;
