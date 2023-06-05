import useSWR from "swr";
import fetcher from "@/libs/fetcher";

// useCurrentUser is a custom hook that wraps useSWR
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data, // data will be undefined until the request completes
    error, // error will be undefined until the request fails
    isLoading, // isLoading will be true until the request completes
    mutate, // mutate can be used to trigger a revalidation
  };
};

export default useCurrentUser;
