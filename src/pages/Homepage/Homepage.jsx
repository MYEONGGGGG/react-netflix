import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import PopularTvSlide from "./components/PopularTvSlide/PopularTvSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import OnAirTvSlide from "./components/OnAirTvSlide/OnAirTvSlide";

const Homepage = () => {

    return (
        <div>
            <Banner/>

            <TopRatedMovieSlide/>
            <PopularMovieSlide/>
            <PopularTvSlide/>
            <OnAirTvSlide/>
        </div>
    );
};

export default Homepage