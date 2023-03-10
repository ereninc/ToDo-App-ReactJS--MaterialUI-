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
import useToggle from "../../../hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

export default function TodoItem({
  task,
  completed,
  removeTodo,
  id,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  const handleEdit = () => {
    toggleIsEditing();
  };

  return (
    <ListItem
      style={{ cursor: "pointer", height: "96px" }}
      onClick={() => {
        isEditing || toggleTodo(id);
      }}
    >
      {isEditing ? (
        <EditTodoForm id={id} currentTask={task} editTodo={editTodo} />
      ) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <span>{task}</span>
          </ListItemText>
        </>
      )}

      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            removeTodo(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
