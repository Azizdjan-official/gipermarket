import { useQuery } from "@tanstack/react-query";
import { request } from './../../../../config/request';

const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allproducts"],
    queryFn: () => {
      return request.get("/allproducts").then((res) => res.data);
    },
  });
};

export default useGetAllProducts;