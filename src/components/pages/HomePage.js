import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-vh-100 py-5 d-flex flex-column justify-content-center text-center">
      <h2 className="mb-4">The Shoppies</h2>
      <h5 className="mb-3">Movie Nomination Page</h5>
      <Link to="/search">Start Searching</Link>
    </div>
  );
};

export default HomePage;
