import React, { useState, useEffect } from "react";
import MoviesItem from "./MoviesItem";

const Movies = () => {
  const updateMovie = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setMovies(parsedData);
  };

  useEffect(() => {
    updateMovie();
  }, []);

  const [movies, setMovies] = useState([]);

  return (
    <div className="container my-3">
      <h2>Top Movies</h2>
      <div className="row">
        {movies.map((element) => {
          return (
            <div className="col-md-4" key={element.show.id}>
              <MoviesItem
                title={element.show.name}
                rating={element.show.rating.average}
                language={element.show.language}
                type={element.show.genres[1]}
                imageUrl={element.show.image.original}
                moviesUrl={element.show.officialSite}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
