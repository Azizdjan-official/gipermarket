import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';


export const useGetusers = () => {
  return useQuery({
    queryKey:["users"],
    queryFn:() => request.get("/users").then((res) => res.data)
  })
}