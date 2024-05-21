import React from "react";
import { useTopRatedMovieQuery } from "../../../../hooks/useTopRatedMovie";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRatedMovieSlide = () => {

    const { data, isLoading, isError, error } = useTopRatedMovieQuery();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <Alert variant="danger">{ error.message }</Alert>
    }

    return (
        <div>
            <MovieSlider
                title="가장 좋은 평가를 받은 영화"
                movies={ data.results }
                responsive={ responsive } />
        </div>
    );
};

export default TopRatedMovieSlide;