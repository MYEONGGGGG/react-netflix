import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovie= () => {
    return api.get(`/movie/top_rated?language=ko-KR&region=KR&with_original_language=ko`);
};

export const useTopRatedMovieQuery = () => {

    return useQuery({
        queryKey: ['movie-top_rated'],
        queryFn: fetchTopRatedMovie,
        select: (result) => result.data
    });
};