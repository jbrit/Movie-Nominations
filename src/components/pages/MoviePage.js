import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
const MoviePage = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
  });
  return (
    <div className="container py-5">
      <h4>Movie Detail Page</h4>
    </div>
  );
};

export default MoviePage;
