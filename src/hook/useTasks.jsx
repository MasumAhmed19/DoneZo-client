import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useTasks = () => {
  const { user, loading } = useAuth();

  const {
    data: userTasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userTasks", user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_URL}/tasks/${user?.email}`)
      return data.data;
    },
  });

  return { userTasks, isLoading, refetch };
};

export default useTasks;
