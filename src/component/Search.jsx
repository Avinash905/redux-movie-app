import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { valueChange } from "../reducer/movieReducer";

export default function Search() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.movies.searchText);
  return (
    <>
      <div className="input-cont d-flex flex-column justify-content-center my-5">
        <h2>Search your favourite movie</h2>
        <div className="input mx-auto my-3">
          <input
            type="text"
            name="movie_name"
            value={searchText}
            onChange={(e) => {
              dispatch(valueChange(e.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
}
