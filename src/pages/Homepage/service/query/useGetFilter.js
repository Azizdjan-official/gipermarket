import { useQuery } from "@tanstack/react-query";
import { request } from '../../../../config/request';




export const useGetFilter = (param) => {
  return useQuery({
    queryKey:["filter", param],
    queryFn:() => request.get("/filter", {params:{...param}}).then((res) => res.data)
  })
}