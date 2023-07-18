import { Badge, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const TaskList = ({ showAlert, setShowAlert, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    const filterItems = taskList.filter((task) => task.id !== id);
    setTaskList(filterItems);
  };
  return (
    <ListGroup as="ul">
      {taskList.map((task) => (
        <ListGroup.Item as="li" key={task.id}>
          <Container>
            <Row>
              <Col sm={9}>{task.task}</Col>
              <Col sm={1}>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked={task.isDone}
                  onChange={() => {
                    const updatedItem = taskList.find(
                      (item) => item.id === task.id
                    );
                    const filteredItems = taskList.filter(
                      (item) => item.id !== task.id
                    );
                    filteredItems.push({
                      ...updatedItem,
                      isDone: !task.isDone,
                    });
                    setTaskList(filteredItems);
                  }}
                />
              </Col>
              <Col sm={1}>
                <Badge bg={task.isDone ? "success" : "warning"}>
                  {task.isDone ? "Complete " : "Pending"}
                </Badge>
              </Col>
              <Col sm={1}>
                <FaTrash onClick={() => handleDelete(task.id)} />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
