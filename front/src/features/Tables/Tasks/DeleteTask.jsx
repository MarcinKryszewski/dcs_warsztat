import { useEffect, useState } from "react";
import axios from "@/api/axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export function DeleteTask(props) {
  const [open, setOpen] = useState(false);
  console.log(props.task.task);
  const task = props.task.task;

  async function handleDelete() {
    const req = await axios.delete("/dcs/task/" + task.Id, task);
    props.action.setDeleted(true);
    props.state.setOpen(false);
  }
  const handleClose = () => {
    props.state.setOpen(false);
  };

  useEffect(() => setOpen(props.state.open));

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Czy chcesz usunąć to działanie?"}</DialogTitle>
        <DialogContent>
          <Typography variant="h5">Linia: {task.Machine.Area}</Typography>
          <Typography variant="h5">
            Maszyna: {task.Machine.MachineName}
          </Typography>
          <Typography variant="h5">Opis: {task.Description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="outlined">
            NIE
          </Button>
          <Button
            onClick={handleDelete}
            color="success"
            variant="contained"
            autoFocus
          >
            TAK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
