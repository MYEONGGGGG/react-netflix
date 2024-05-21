import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchOnAirTv= () => {
    return api.get(`/tv/on_the_air?language=ko-KR&region=KR&with_original_language=ko`);
};

export const useOnAirTvQuery = () => {

    return useQuery({
        queryKey: ['tv-on_the_air'],
        queryFn: fetchOnAirTv,
        select: (result) => result.data
    });
};