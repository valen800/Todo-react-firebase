import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {} from "lodash";
import { ReactComponent as Send } from "../../assets/send.svg";

import "./AddTasks.scss";

export default function AddTasks() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //No recarga la pagina
    console.log(task);
  };

  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input
        type="text"
        placeholder="Nueva tarea"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
}
