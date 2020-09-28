import React from "react";
import LoadingLine from "./LoadingLine";

const MoviePageLoader = () => {
  return (
    <>
      <div className="f-22 mb-4">
        <LoadingLine width="50%" />
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-6 mb-2 mb-md-3 p-0">
          <div
            style={{
              height: "300px",
              width: "100%",
              maxWidth: "300px",
            }}
            className="loading-bg"
          ></div>
        </div>
        <div className="col-12 col-md-6 d-md-flex align-items-center py-0 px-0 px-md-2">
          <div className="w-100 d-none d-md-block">
            <div className="mb-3">
              <LoadingLine width="75%" />
            </div>
            <div className="mb-3">
              <LoadingLine width="80%" />
            </div>
            <div className="mb-3">
              <LoadingLine width="75%" />
            </div>
            <div className="mb-3">
              <LoadingLine width="60%" />
            </div>
          </div>
        </div>
      </div>
      <ul className="p-0 py-2 detail-list">
        <div className="mb-3">
          <LoadingLine width="70%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="75%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="80%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="75%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="60%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="90%" />
        </div>
        <div className="mb-3">
          <LoadingLine width="30%" />
        </div>
      </ul>
    </>
  );
};

export default MoviePageLoader;
