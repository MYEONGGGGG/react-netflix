import React from "react";
import { usePopularTvQuery } from "../../../../hooks/usePopularTv";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularTvSlide = () => {

    const { data, isLoading, isError, error } = usePopularTvQuery();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <Alert variant="danger">{ error.message }</Alert>
    }

    return (
        <div>
            <MovieSlider
                title="TV 드라마"
                movies={ data.results }
                responsive={ responsive } />
        </div>
    );
};

export default PopularTvSlide;