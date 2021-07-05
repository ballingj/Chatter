import React from "react";
import { Nav, NavItem, NavLink, NavbarBrand, Button } from "reactstrap";
import UserBtn from "./UserBtnComponent";
import "../css/Sidebar.css";

function Sidebar(props) {
  return (
    <React.Fragment >
      <div className="sidebar">
        <div className="container nav-container">
          <div className="row nav-row">
            <div className="col navigation">
              <Nav className="sidebar" vertical>
                <NavbarBrand href="/" className="logo ">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </NavbarBrand>
                <NavItem className="nav-item text-left">
                  <NavLink className="nav-item__link " href="#">
                    <i className="fa fa-home" aria-hidden="true" /> Home
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link " href="#">
                    <i className="fa fa-hashtag" aria-hidden="true" /> Explore
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-bell" aria-hidden="true" />{" "}
                    Notifications
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-bookmark" aria-hidden="true" />{" "}
                    Bookmarks
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-file-text-o" aria-hidden="true" /> Lists
                    Messages
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-user" aria-hidden="true" /> Profile
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-item__link" href="#">
                    <i className="fa fa-ellipsis-h" aria-hidden="true" /> More
                  </NavLink>
                </NavItem>
                <Button className="btn-tweet">Chatter</Button>
                <UserBtn />
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
