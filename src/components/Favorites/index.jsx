import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { removeFromFavorites } from "../../store/slices/favorites";
import { langContext } from "../../contexts/language";
const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const { language, setLanguage } = useContext(langContext);

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
  };

  const handleDelete = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="container mx-auto my-10">
      <div className="m-5">
        <p>Current Language: {language}</p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleLanguageChange}
        >
          Change Language
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                <p className="text-gray-700 text-base">
                  {movie.overview.length > 150
                    ? `${movie.overview.substring(0, 150)}...`
                    : movie.overview}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 z-50"
                onClick={() => handleDelete(movie.id)}
              >
                <BsTrash size={20} style={{ color: "white" }} />
              </button>
            </div>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
