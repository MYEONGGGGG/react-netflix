import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFoundpage/NotFoundPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={ <AppLayout/> }>
              <Route index element={<Homepage/>} />
              <Route path="/login" element={<Login/>} />

              <Route path="movies">
                  <Route index element={<MoviePage/>} />
                  <Route path=":id" element={<MovieDetailPage/>} />
              </Route>

              <Route path="*" element={<NotFoundPage/>} />
          </Route>
      </Routes>
  );
}

export default App;
