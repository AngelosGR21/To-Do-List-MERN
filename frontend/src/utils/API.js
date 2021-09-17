import axios from "axios";

export const fetchAllTasks = async (setTasks, setLoading) => {
  try {
    const data = await axios.get("http://localhost:5000/api/tasks");
    setTasks(data.data.data);
    setLoading(false);
  } catch (e) {
    console.dir(e);
  }
};

export const addTask = async (name) => {
  try {
    await axios.post("http://localhost:5000/api/tasks", { name });
  } catch (e) {
    console.log(e);
  }
};

export const updateTask = async (task, id) => {
  try {
    await axios.patch(`http://localhost:5000/api/tasks/${id}`, { name: task });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
  } catch (e) {
    console.log(e);
  }
};
