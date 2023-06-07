import useSWR from "swr";
import fetcher from "@/libs/fetcher";

// useCurrentUser is a custom hook that wraps useSWR
const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
