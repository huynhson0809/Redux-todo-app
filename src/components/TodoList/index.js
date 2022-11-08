import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import Todo from "../Todo";
import { todosRemaining } from "../../redux/selectors";
import todosSlice from "../Todo/todosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemaining);
  // const searchText = useSelector(searchTextSelector);

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddButtonClick = () => {
    const randomId = Math.floor(Math.random() * 101);
    dispatch(
      todosSlice.actions.addTodo({
        id: randomId,
        name: name,
        completed: false,
        priority: priority,
      })
    );
  };

  const handleChangeNameTodo = (e) => {
    setName(e.target.value);
  };

  const handleChangePriority = (value) => {
    console.log(value);
    setPriority(value);
  };
  // console.log(todoList);
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              name={todo.name}
              prioriry={todo.prioriry}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={handleChangeNameTodo} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
