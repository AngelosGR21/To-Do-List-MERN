import { useState } from "react";
import { updateTask } from "./API";
import {
  Box,
  Modal,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material/";

import EditIcon from "@mui/icons-material/Edit";

const CustomModal = (props) => {
  const { name, id } = props.props;
  const [taskName, setTaskName] = useState(name);
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(taskName, id);
    setOpen(false);
  };

  const closeModal = () => {
    setOpen(false);
    setTaskName(name);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit}>
        <Box sx={style} component="form">
          <Typography>Edit Task</Typography>
          <TextField
            id="name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          ></TextField>
          <Button disabled={!taskName ? true : false} type="submit">
            Save
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
