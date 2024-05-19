import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import PopularTvSlide from "./components/PopularTvSlide/PopularTvSlide";

const Homepage = () => {

    return (
        <div>
            <Banner/>
            <PopularMovieSlide/>
            <PopularTvSlide/>
        </div>
    );
};

export default Homepage