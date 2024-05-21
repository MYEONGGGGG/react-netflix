import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenereQuery } from "../../hooks/useMovieGenre";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MovieCard = ({ movie }) => {

    const { data:genreData } = useMovieGenereQuery();

    // 평점
    const showVote = (vote) => {
        const fullStars = Math.floor(vote / 2);
        const halfStar = vote % 2 >= 1;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div>
                {[...Array(fullStars)].map((_, i) => <i className="bi bi-star-fill" key={`full-${i}`} />)}
                {halfStar && <i className="bi bi-star-half" key="half" />}
                {[...Array(emptyStars)].map((_, i) => <i className="bi bi-star" key={`empty-${i}`} />)}
            </div>
        );
    };

    // 장르 목록
    const showGenre = (genreIdList) => {
        if (!genreData) return []

        // 목록이 존재할 경우
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);

            if (genreObj !== undefined) {
                return genreObj.name;
            } else {
                return 'Etc';
            }
        });

        return genreNameList;
    };

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
                { showGenre(movie.genre_ids).map((genre, index) => (
                    <Badge bg="danger" key={index} className="me-1">{ genre }</Badge>
                )) }
                <div className="mt-2">
                    <div>{ showVote(movie.vote_average) }</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQi_mZNhKZuLFNtzOgul0w9Tk8sDB_zGXazNIVce-0g&s"
                             alt="under18" width={20} className="ms-2" />
                    ) : (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlxM2LYZKLNsHQ_3Aw-HNhLu1TfMwxWpdyFerR0i7Hg&s"
                             alt="all" width={20} className="ms-2" />
                    )}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;