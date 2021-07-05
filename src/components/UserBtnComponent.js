import React from "react";

function UserBtn(props) {
  return (
    <React.Fragment>
      <div className="userbtn d-flex justify-content-center align-items-center my-3">
        <div className="mr-2">
          <div className="profile-image d-flex align-items-center">
            <img src="/assets/images/userphoto.png" alt="User profile" />
          </div>
        </div>
        <div className=" text-left d-flex align-items-center">
          <p className="m-0">
            Username{" "}
            <span className="text-secondary">
              <br />
              @username77
            </span>
          </p>
        </div>
        <div className="ml-5 text-left d-flex align-items-center">
          <i className="fa fa-ellipsis-h" aria-hidden="true" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserBtn;
