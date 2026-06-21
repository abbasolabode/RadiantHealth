import { useQuery } from "@tanstack/react-query";
import { getBlogDetailsById } from "../services/apiGetBlog";


export function useGetBlogDetailsById(id) {
  const { data: blogDetails = {}, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogDetailsById(id),
    enabled: !!id,
  });

  return {blogDetails, isLoading,};
}