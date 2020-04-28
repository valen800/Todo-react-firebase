import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import { ReactComponent as Send } from "../../assets/send.svg";

import firebase from "../../utils/firebase";
import "firebase/firestore";

import "./AddTasks.scss";

const db = firebase.firestore(firebase);

export default function AddTasks() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //No recarga la pagina
    if (!isEmpty(task)) {
      console.log("No esta vacio");
      db.collection("tasks")
        .add({
          name: task,
          completed: false,
        })
        .then(() => {
          console.log("Tarea creada");
        })
        .catch(() => {
          console.log("Error");
        });
    }
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
