import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, setIsFetching } from "../../actions/mdetailActions";
import { nominateMovie } from "../../actions/movieActions";

const MoviePage = ({
  getMovie,
  setIsFetching,
  isFetching,
  nominateMovie,
  movie,
  nominations,
}) => {
  const { id } = useParams();
  const {
    Title,
    Year,
    Response,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
  } = movie;
  useEffect(() => {
    setIsFetching(true);
    getMovie(id);
  }, []);
  return (
    <div className="container py-5">
      <h4>Movie Detail Page</h4>
      {isFetching ? "Loading" : ""}
      {movie.Response === "True" ? (
        <ul>
          <li>
            <img
              style={{
                objectFit: "contain",
                height: "300px",
                width: "300px",
              }}
              src={
                Poster !== "N/A"
                  ? Poster
                  : "https://bitsofco.de/content/images/2018/12/broken-1.png"
              }
              alt={Title + " image"}
            />
          </li>
          <li>Title: {Title}</li>
          <li>Year: {Year}</li>
          <li>Rated: {Rated}</li>
          <li>Released:{Released}</li>
          <li>Runtime:{Runtime}</li>
          <li>Genre: {Genre}</li>
          <li>Director: {Director}</li>
          <li>Writer: {Writer}</li>
          <li>Actors: {Actors}</li>
          <li>Plot: {Plot}</li>
          <li>Language: {Language}</li>
          <li>Country: {Country}</li>
          <li>Awards: {Awards}</li>

          <li>Ratings: {JSON.stringify(Ratings)}</li>
          <li>Metascore: {Metascore}</li>
          <button
            onClick={() => {
              nominateMovie(movie);
            }}
            className="btn btn-light border"
            disabled={nominations.some((elt) => elt.imdbID === movie.imdbID)}
          >
            Nominate
          </button>
        </ul>
      ) : null}
      {Response === "False" ? "Movie Not Found" : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.movie_detail.isFetching,
  movie: state.movie_detail.movie,
  nominations: state.movie.nominations,
});

export default connect(mapStateToProps, {
  getMovie,
  setIsFetching,
  nominateMovie,
})(MoviePage);
