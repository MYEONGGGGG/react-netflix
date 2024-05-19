import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "react-bootstrap";
import "./Banner.style.css";

const Banner = () => {

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <Alert variant="danger">{ error.message }</Alert>
  }

  return <div className="banner"
      style={{
        backgroundImage:
            "url(" +
            `${process.env.REACT_APP_BANNER}${data?.results[1].poster_path}` +
            ")"
  }}>
    <div className="text-white banner-text-area">
      <h1>{ data?.results[1].title }</h1>
      <p>{ data?.results[1].overview }</p>
    </div>
  </div>;
};

export default Banner;