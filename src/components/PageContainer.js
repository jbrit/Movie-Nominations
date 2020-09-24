import React from "react";
import { Link } from "react-router-dom";
import logo from "../shoppies logo.svg";

const PageContainer = ({ children }) => {
  return (
    <>
      <div className="container-fluid main-container d-flex flex-column min-vh-100  px-4 px-md-4 px-lg-5">
        <div className="pt-4">
          <Link to="/">
            <img
              style={{ height: "2rem", objectFit: "contain" }}
              className="ml-md-n3"
              src={logo}
              alt="The Shoppies"
            />
          </Link>
        </div>
        {children}
      </div>
    </>
  );
};

export default PageContainer;
