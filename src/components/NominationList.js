import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import NominationItem from "./NominationItem";

const NominationList = ({ nominations, removeMovie }) => {
  return (
    <>
      <div className="card-heading f-22 f-sm-24 f-md-28 fw-700">
        Nominations (
        {nominations.length < 5 ? `${5 - nominations.length} left` : "Complete"}
        )
      </div>
      <ul className="card-content p-0">
        {nominations.map((movie) => (
          <NominationItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
};

NominationList.propTypes = {
  nominations: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps, {})(NominationList);
