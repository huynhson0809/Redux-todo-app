import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setSearch, setPriority } from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [prioriryFilter, setPriorityFilter] = useState([]);

  const handleChangeSearch = (e) => {
    setSearchFilter(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const handleChangeStatus = (e) => {
    console.log(e.target.value);
    setStatusFilter(e.target.value);
    dispatch(setStatus(e.target.value));
  };

  const handleChangePriority = (value) => {
    console.log(value);
    setPriorityFilter(value);
    dispatch(setPriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchFilter}
          onChange={handleChangeSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={handleChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={prioriryFilter}
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
      </Col>
    </Row>
  );
}
