import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularTv= () => {
    return api.get(`/tv/popular?language=ko-KR&region=KR&with_original_language=ko`);
};

export const usePopularTvQuery = () => {

    return useQuery({
        queryKey: ['tv-popular'],
        queryFn: fetchPopularTv,
        select: (result) => result.data
    });
};