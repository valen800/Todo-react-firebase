import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { map, size } from "lodash";

import AddTasks from "./components/AddTasks";
import Task from "./components/Task";

import "./App.scss";

import firebase from "./utils/firebase";
import "firebase/firestore";

const db = firebase.firestore(firebase);

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [reloadTasks, setReloadTasks] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("tasks")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response.docs, (task) => {
          const data = task.data();
          data.id = task.id;

          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
        setLoading(false);
      });
    setReloadTasks(false);
  }, [reloadTasks]);

  return (
    <div>
      <Container fluid className="app">
        <div className="title">
          <h1>Valentín Ruiz López</h1>
        </div>

        <Row className="todo">
          <Col
            className="todo__title"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <h2>Today</h2>
          </Col>
          <Col
            className="todo__list"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            {loading ? (
              <div className="loading">
                <Spinner animation="border" role="status" />
                <span>Cargando...</span>
              </div>
            ) : size(tasks) === 0 ? (
              <h3>No hay tareas</h3>
            ) : (
              map(tasks, (task, index) => (
                <Task key={index} task={task} setReloadTasks={setReloadTasks} />
              ))
            )}
          </Col>
          <Col
            className="todo__input"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <AddTasks setReloadTasks={setReloadTasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
