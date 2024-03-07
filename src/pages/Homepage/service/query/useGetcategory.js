import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetcategory = () => {
  return useQuery({
    queryKey:["category"],
    queryFn:() => request.get("/category").then((res) => res.data)
  })
}