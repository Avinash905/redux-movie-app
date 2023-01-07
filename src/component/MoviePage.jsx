import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getSingleMovie } from "../reducer/movieReducer";

export default function MoviePage() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies.movieData);
  const loading = useSelector((state) => state.movies.loading);
  const { id } = useParams();

  useEffect(() => {
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;
    dispatch(getSingleMovie(API));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center movie">
      <div className="card shadow rounded mb-3" style={{ width: "50vw" }}>
        <div className="row g-0">
          <div className="card-img-cont col-md-4 d-flex align-items-center">
            <img
              src={movieData.Poster}
              className="img-fluid rounded-start"
              alt="poster"
            />
          </div>
          <div className="card-right col-md-8">
            <div className="card-body ms-3">
              <h5 className="card-title my-4">{movieData.Title}</h5>
              <p className="card-text">
                <span>Actors: </span>
                {movieData.Actors}
              </p>
              <p className="card-text">
                <span>Director: </span>
                {movieData.Director}
              </p>
              <p className="card-text">
                <span>Genre: </span>
                {movieData.Genre}
              </p>
              <p className="card-text">
                <span>Language: </span>
                {movieData.Language}
              </p>
              <p className="card-text">
                <span>Released On: </span>
                {movieData.Released}
              </p>
              <p className="card-text">
                <span>Imdb Rating: </span>
                {movieData.Ratings ? movieData.Ratings[0].Value : "6 / 10"}
              </p>
              <p className="card-text">
                <span>Summary: </span>
                {movieData.Plot}
              </p>
              <div className="button text-center">
                <NavLink className="btn btn-success " to="/redux-movie-app">
                  Go Back
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
