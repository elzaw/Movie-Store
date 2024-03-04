import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
// import TodosForm from "./components/Todos";
import Navbar from "./components/Navbar";
import Movies from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { LangProvider } from "./contexts/language";
import { Toaster } from "react-hot-toast";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <LangProvider value={{ language, setLanguage }}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Movies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/fav" element={<Favorites />} />
            </Routes>
            <div>
              <Toaster />
            </div>
          </BrowserRouter>
        </Provider>
      </LangProvider>
    </div>
  );
}

export default App;
