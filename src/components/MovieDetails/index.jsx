import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../../Axois/instance";

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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="columns-3" style={{ marginLeft: "50px" }}>
        <img
          className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        />

        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <h3>{movieDetails.release_date}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
