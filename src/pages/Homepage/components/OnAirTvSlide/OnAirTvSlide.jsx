import React from "react";
import { useOnAirTvQuery } from "../../../../hooks/useOnAirTv";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const OnAirTvSlide = () => {

    const { data, isLoading, isError, error } = useOnAirTvQuery();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <Alert variant="danger">{ error.message }</Alert>
    }

    return (
        <div>
            <MovieSlider
                title="현재 방영중인 TV 드라마"
                movies={ data.results }
                responsive={ responsive } />
        </div>
    );
};

export default OnAirTvSlide;