import axios from "axios";


// Fetch all tasks (assumes API returns { todo: [...], inprogress: [...], done: [...] })
export const fetchTasks = async (email) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/tasks/${email}`);
        return response.data;
    }catch(error){
        console.error("error ind data fetchin===>", error);
    }

};

// Update a task (for moving items)
export const updateTask = async ({ id, category }) => {
  await axios.put(`${import.meta.env.VITE_URL}}}/tasks/${id}`, { category });
};
