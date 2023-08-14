import React from "react";
import "./Cont5.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faDeleteLeft,
  faEllipsisVertical,
  faFilter,
  faHeart,
  faLock,
  faShareNodes,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Cont5() {
  return (
    <>
      <div className="cont5">
        <div className="cont5_top">
          <h3>My Streams</h3>
          <p>
            <FontAwesomeIcon icon={faFilter} />
          </p>
        </div>
        <div className="cont5_center">
          <div className="cont5_center1">
            <div className="cont5_center1_img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80s"
                alt="loading"
              />
            </div>
            <div className="cont5_center1_data">
              <div className="cont5_center1_data_head">
                <h4>Mr.Arthur Christopher</h4>
                <p>
                  <FontAwesomeIcon icon={faEllipsisVertical} className="ver" />
                </p>
              </div>
              <div className="cont5_center1_data_p">
                <p className="time">13 minutes ago</p>

                <p>
                  Figma is a leading design software, helping teams and
                  individuals reate designs faster and more efficiently. Figma
                  is free and you can use it right on your web browser, on Mac
                  and Windows.
                </p>
              </div>
              <div className="cont5_center1_data_l">
                <div className="like">
                  <p>
                    <FontAwesomeIcon icon={faHeart} /> Like
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </p>
                </div>
                <div className="comm">
                  <p>
                    <FontAwesomeIcon icon={faThumbsUp} /> 20
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> 24 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="cont5_center2">
            <div className="cont5_center2_img">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="loading"
              />
            </div>
            <div className="cont5_center2_data">
              <div className="cont5_center2_data_head">
                <h4>BNI Group - Mr. Cloud Admin</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLock} /> private
                  </span>{" "}
                  <FontAwesomeIcon icon={faEllipsisVertical} className="ver" />
                </p>
              </div>
              <div className="cont5_center2_data_p">
                <p className="time">2 days ago</p>
                <p>Share Mr. Cloud Admin Post</p>
                <p>PFA</p>
                <p>click here to view the complete message thread</p>
              </div>
              <div className="cont5_center2_data_l">
                <div className="like">
                  <p>
                    <FontAwesomeIcon icon={faHeart} /> Unlike
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </p>
                </div>
                <div className="comm">
                  <p>
                    <FontAwesomeIcon icon={faThumbsUp} /> 20
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> 24 Comments
                  </p>
                </div>
              </div>
              <hr className="hr1" />
              {/* another */}
              <div className="cont5_center2_part">
                <div className="cont5_center2_part_img">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="loading"
                  />
                </div>
                <div className="cont5_center2_part_data">
                  <div className="cont5_center2_part_data_head">
                    <h4>Martin Wills</h4>
                    <p>
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="ver"
                      />
                    </p>
                  </div>
                  <div className="cont5_center2_part_data_p">
                    <p className="time">a few seconds ago</p>
                    <p>Nice post, appriciate</p>
                  </div>
                  <div className="cont5_center2_part_data_l">
                    <div className="like">
                      <p>
                        <FontAwesomeIcon icon={faHeart} /> Like
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faDeleteLeft} /> Delete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="cont5_center3">
            <div className="cont5_center3_img">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="loading"
              />
            </div>
            <div className="cont5_center3_data">
              <div className="cont5_center3_data_head">
                <h4>Mr.Arthur Christopher</h4>
                <p>
                  <FontAwesomeIcon icon={faEllipsisVertical} className="ver" />
                </p>
              </div>
              <div className="cont5_center3_data_p">
                <p className="time">13 minutes ago</p>

                <p>
                  Figma is a leading design software, helping teams and
                  individuals reate designs faster and more efficiently. Figma
                  is free and you can use it right on your web browser, on Mac
                  and Windows.
                </p>
              </div>
              <div className="cont5_center3_data_l">
                <div className="like">
                  <p>
                    <FontAwesomeIcon icon={faHeart} /> Like
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </p>
                </div>
                <div className="comm">
                  <p>
                    <FontAwesomeIcon icon={faThumbsUp} /> 20
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faComment} /> 24 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont5;
