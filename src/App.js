import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AddTasks from "./components/AddTasks";

import "./App.scss";

export default function App() {
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
            <p>Lista de tareas</p>
          </Col>
          <Col
            className="todo__input"
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
          >
            <AddTasks />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
