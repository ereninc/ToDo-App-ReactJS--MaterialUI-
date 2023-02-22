import { TextField } from "@mui/material";
import React from "react";
import useInputState from "../../../hooks/useInputState";

export default function EditTodoForm({ id, currentTask, editTodo }) {
  const [value, handleChange, reset] = useInputState(currentTask);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
      }}
    >
      <TextField
        label={currentTask}
        margin="normal"
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}
