import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../../Axois/instance";
import toast from "react-hot-toast";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await instance.get(`/movie/${id}`);
        setMovieDetails(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovieDetails();
  }, [id]); // Added id as a dependency to useEffect

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const handleWatchClick = () => {
    // Logic for handling watch button click
    // You can redirect to a watch page or trigger some other action
    toast.success("Watch button clicked!");
  };

  console.log(movieDetails);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="rounded-lg shadow-lg w-full md:w-1/3"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="md:ml-8 mt-4 md:mt-0 pl-10">
          <h1 className="text-3xl font-bold mb-4">{movieDetails.title}</h1>
          <p className="text-2xl mb-4 text-blue-500">{movieDetails.tagline}</p>
          <p className="text-lg mb-4">{movieDetails.overview}</p>
          <p className="text-gray-600">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="text-gray-600">
            Rating: {movieDetails.vote_average}/10
          </p>
          <p className="text-gray-600">
            Runtime: {movieDetails.runtime} minutes
          </p>
          <p className="text-gray-600">
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>

          <button
            className="mt-4 px-24 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleWatchClick}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
