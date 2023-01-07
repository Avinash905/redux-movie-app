import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import MoviePage from "./component/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies-app-redux" element={<Home />} />
        <Route path="/movie-app-redux/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
