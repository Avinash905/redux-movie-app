import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getmovies } from "../reducer/movieReducer";

export default function MovieSection() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const searchText = useSelector((state) => state.movies.searchText);

  useEffect(() => {
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}`;
    let timer = setTimeout(() => {
      dispatch(getmovies(API));
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, searchText]);

  if (loading) {
    return <div className="movies-loading">Loading...</div>;
  }

  return (
    <>
      {movies.Response === "True" ? (
        <div className="container grid-four my-5">
          {movies.Search.map((movie) => {
            return (
              <NavLink
                key={movie.imdbID}
                to={`/redux-movie-app/movie/${movie.imdbID}`}
              >
                <div className="card-own">
                  <div className="img-cont">
                    <h2 className="title">{movie.Title}</h2>
                    <img
                      src={movie.Poster}
                      className="img-poster"
                      alt={movie.Title}
                    />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <div className="text-center fs-1">Error !!!</div>
      )}
    </>
  );
}
