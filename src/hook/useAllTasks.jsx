import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllTasks = () => {
    const {user, loading} = useAuth();

    const {data: allTasks, isLoading, refetch} = useQuery({
        queryKey:['role', user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async ()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_URL}/tasks/${user?.email}`)
            // console.log(data)
            return data
        }
    })

    return [allTasks, isLoading, refetch]
};

export default useAllTasks;