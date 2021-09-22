import { useEffect, useState } from "react";
import { fetchAllTasks, deleteTask, addTask } from "./utils/API";
import CustomModal from "./utils/CustomModal";

import "./styles/styles.css";

import {
  List,
  ListItem,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  const [rerender, setRerender] = useState(true);
  useEffect(() => {
    fetchAllTasks(setTasks, setLoading);
  }, [rerender]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    if (!newTask) {
      setError(true);
    }
    setNewTask("");
    e.target.reset();
    setRerender((prev) => !prev);
  };

  const handleDelete = (id) => {
    deleteTask(id);
    setRerender((prev) => !prev);
  };

  return (
    <>
      <List className="list">
        <Typography variant="h4" className="listHeader">
          To Do List
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="form">
          <TextField
            label="Task name"
            className="input"
            size="small"
            error={error}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          ></TextField>
          <Button className="submitButton" type="submit" variant="contained">
            Add
          </Button>
        </Box>
        {tasks.map((task) => {
          return (
            <ListItem
              className="listItem"
              key={task._id}
              secondaryAction={
                <>
                  <CustomModal props={{ name: task.name, id: task._id }} />
                  <IconButton
                    onClick={() => handleDelete(task._id)}
                    className="deleteButton"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </>
              }
            >
              {task.name}
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default App;
