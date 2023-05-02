import Home from 'pages/Home';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <div>MoviesPage страница поиска фильмов по ключевому слову</div>
          }
        />
        <Route
          path="/movies/:movieId"
          element={<div>Cтраница с детальной информацией о кинофильме</div>}
        >
          <Route
            path="/movies/:movieId/cast"
            element={<div>Информация о актерском составе</div>}
          />
          <Route
            path="/movies/:movieId/reviews"
            element={<div>Информация об обзорах</div>}
          />
        </Route>
      </Routes>
    </div>
  );
};
