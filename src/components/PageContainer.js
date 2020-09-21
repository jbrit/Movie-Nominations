import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="container-fluid main-container px-3 px-md-4 px-lg-5">
      {children}
    </div>
  );
};

export default PageContainer;
