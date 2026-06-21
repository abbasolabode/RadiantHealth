import { useQuery } from "@tanstack/react-query";
import { getBlogData } from "../services/apiGetBlog";


export function useGetBlog(){
  //use the useQuery hook to fetch blog data, providing a query key and a function to fetch the data
    const {data = [], isLoading} = useQuery({
      queryKey: ["blog"],
      queryFn:  getBlogData
    });

    //return the fetched data and loading state
    return {data, isLoading};
}