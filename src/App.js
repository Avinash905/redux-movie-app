import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import MoviePage from "./component/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/redux-movie-app" element={<Home />} />
        <Route path="/redux-movie-app/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
