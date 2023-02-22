import { TextField } from "@mui/material";
import React from "react";
import useInputState from "../../../hooks/useInputState";

export default function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.currentTask);

  return (
    <div>
      <TextField
        label={props.currentTask}
        margin="normal"
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
}
