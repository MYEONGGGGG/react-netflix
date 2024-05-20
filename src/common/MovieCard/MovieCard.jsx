import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {

    return (
        <div className="movie-card"
             style={{
                 backgroundImage:
                     "url(" +
                     `${process.env.REACT_APP_BANNER}${movie.poster_path}` +
                     ")"
             }}>
            <div className="overlay p-3">
                <h3>{ movie.title }</h3>
                { movie.genre_ids.map((id) => (
                    <Badge bg="danger">{ id }</Badge>
                )) }
                <div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? "over18" : "under18"}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;