import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { Stack } from "react-bootstrap";

function App() {
  const [showAlert, setShowAlert] = useState({
    variant: "",
    text: "",
    showAlert: false,
  });
  const [taskList, setTaskList] = useState([]);
  return (
    <Container>
      <Stack gap={3}>
        <AddNewTask
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </Stack>
      {/* <Row>
        <Col>
          <AddNewTask
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </Col>
      </Row> */}
    </Container>
  );
}

export default App;
