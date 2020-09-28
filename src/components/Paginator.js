import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="d-flex  align-items-stretch">
          <Link
            className="jb-btn page-btn shadow  rounded-left"
            to={previousPage ? "/search/?" + previousPage : "#"}
            onClick={(e) => handleClick(e, hasPrevious)}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "1rem",
              }}
              icon={faChevronLeft}
            />
          </Link>
          <div className="d-inline-flex page-bg shadow align-items-center px-2">
            Page {currentPage} of {totalPages}
          </div>
          <Link
            className="jb-btn page-btn shadow rounded-right"
            to={nextPage ? "/search/?" + nextPage : "#"}
            onClick={(e) => handleClick(e, hasNext)}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "1rem",
              }}
              icon={faChevronRight}
            />
          </Link>
        </div>
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
