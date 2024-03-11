import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';




export const useGetphone = () => {
  return useQuery({
    queryKey:["phones"],
    queryFn:() => request.get("/phones").then((res) => res.data)
  })
}