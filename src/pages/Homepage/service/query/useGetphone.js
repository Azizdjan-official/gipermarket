import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetphone = () => {
  return useQuery({
    queryKey:["phone"],
    queryFn:() => request.get("/phone").then((res) => res.data)
  })
}