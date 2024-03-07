import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetaction = () => {
  return useQuery({
    queryKey:["action"],
    queryFn:() => request.get("/action").then((res) => res.data)
  })
}