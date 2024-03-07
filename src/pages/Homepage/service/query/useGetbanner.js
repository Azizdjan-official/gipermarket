import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetbanner = () => {
  return useQuery({
    queryKey:["banner"],
    queryFn:() => request.get("/banner").then((res) => res.data)
  })
}