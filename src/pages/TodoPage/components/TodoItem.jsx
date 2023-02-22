import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

export default function TodoItem({
  task,
  completed,
  removeTodo,
  id,
  toggleTodo,
}) {
  return (
    <ListItem
      style={{ cursor: "pointer" }}
      onClick={() => {
        toggleTodo(id);
      }}
    >
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        <span>{task}</span>
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            removeTodo(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
