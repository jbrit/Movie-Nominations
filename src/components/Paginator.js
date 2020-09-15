import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Paginator = ({
  totalPages,
  currentPage,
  hasPrevious,
  hasNext,
  nextPage,
  previousPage,
}) => {
  const handleClick = (e, hasLink) => {
    hasLink || e.preventDefault();
  };
  return (
    <>
      {totalPages <= 1 || !totalPages ? (
        <></>
      ) : (
        <>
          <Link
            to={previousPage ? "/search/?" + previousPage : null}
            onClick={(e) => handleClick(e, hasPrevious)}
          >
            Prev
          </Link>
          Page {currentPage} of {totalPages}
          <Link
            to={nextPage ? "/search/?" + nextPage : null}
            onClick={(e) => handleClick(e, hasNext)}
          >
            Next
          </Link>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  totalPages: state.movie.search_result.totalPages,
  currentPage: state.movie.search_result.currentPage,
  hasPrevious: state.movie.search_result.hasPrevious,
  hasNext: state.movie.search_result.hasNext,
  previousPage: state.movie.search_result.previousPage,
  nextPage: state.movie.search_result.nextPage,
});

export default connect(mapStateToProps, {})(Paginator);
