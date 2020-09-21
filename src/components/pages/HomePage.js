import React from "react";
import SearchBox from "../SearchBox";

const HomePage = () => {
  return (
    <div className="min-vh-100 py-5 d-flex flex-column justify-content-center text-center">
      <div className="f-36 f-md-56 f-lg-64 fw-600">
        Save your favourite Movies
      </div>
      <div className="f-14 f-md-18 f-lg-20 fw-400 mb-4">
        We bring your favourite movies up for nomination to your finger tips
      </div>
      <div style={{ width: "80%", maxWidth: "550px" }} className="mx-auto">
        <SearchBox />
      </div>
    </div>
  );
};

export default HomePage;
