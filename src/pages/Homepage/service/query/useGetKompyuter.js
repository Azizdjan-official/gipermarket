import { useQuery } from "@tanstack/react-query";
import { request } from '../../../../config/request';




export const useGetKompyuter = (param) => {
  return useQuery({
    queryKey:["laptops", param],
    queryFn:() => request.get("/laptops", {params:{...param}}).then((res) => res.data)
  })
}