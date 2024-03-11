import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetlaptop = () => {
  return useQuery({
    queryKey:["laptops"],
    queryFn:() => request.get("/laptops").then((res) => res.data)
  })
}