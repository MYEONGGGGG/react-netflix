import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
    return api.get(`/movie/popular?language=ko-KR&region=KR&with_original_language=ko`);
};

export const usePopularMoviesQuery = () => {

    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data
    });
};