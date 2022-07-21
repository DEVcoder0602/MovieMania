import React from "react";
// import Booking from "./Booking";
import { Link } from "react-router-dom";

const MoviesItem = ({ title, imageUrl, moviesUrl, rating, language, type }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{language}</li>
        <li className="list-group-item">{type}</li>
        <li className="list-group-item">
          {rating ? `${rating}/10` : "Not rated"}
        </li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary btn-sm me-2">
          <Link
            to="/booking"
            className="link"
            style={{ textDecoration: "none", color: "white" }}
          >
            Book Tickets
          </Link>
        </button>
        <a
          href={moviesUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          More details
        </a>
      </div>
    </div>
  );
};

export default MoviesItem;
