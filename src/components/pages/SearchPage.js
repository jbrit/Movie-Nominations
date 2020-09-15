import React from "react";
import SearchBox from "../SearchBox";
import MovieList from "../MovieList";
import NominationList from "../NominationList";

const SearchPage = () => {
  return (
    <div className="container py-5">
      <SearchBox />
      <div className="row mt-5">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <MovieList />
        </div>
        <div className="col-12 col-md-6">
          <NominationList />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
