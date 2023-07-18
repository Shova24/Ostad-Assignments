import { useState } from "react";
import { Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import AlertMessage from "./AlertMessage";

const AddNewTask = ({ showAlert, setShowAlert, taskList, setTaskList }) => {
  const [task, setTask] = useState({
    id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
    task: "",
    isDone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.task.trim() !== "") {
      setTaskList([...taskList, task]);
      setShowAlert({
        variant: "success",
        text: "Task added successfully!",
        showAlert: true,
        isDone: false,
      });
      setTask({
        id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
        task: "",
        isDone: false,
      });
    } else {
      setShowAlert({
        variant: "danger",
        text: "You must enter a task",
        showAlert: true,
      });
    }
  };

  const handleTaskChange = (e) => {
    setShowAlert({
      variant: "",
      text: "",
      showAlert: false,
    });
    setTask({
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
      task: e.target.value,
      isDone: false,
    });
  };

  return (
    <>
      {showAlert.showAlert && (
        <AlertMessage variant={showAlert.variant} text={showAlert.text} />
      )}
      <Row>
        <Card bg="light" className="p-2 ms-auto m-2">
          <Card.Body>
            <Form onSubmit={handleSubmit} className="p-2 my-2">
              <Col className="py-2 my-2">
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Enter a task"
                    value={task.task}
                    onChange={handleTaskChange}
                    required // Add the 'required' attribute here
                  />
                </Form.Group>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button variant="outline-dark" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default AddNewTask;
