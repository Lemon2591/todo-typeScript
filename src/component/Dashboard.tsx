import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import TableData from "./Table";
import { useDispatch } from "react-redux";
import constants from "../redux/action/constants";

export interface IValue {
  name: string;
  price: string;
  descriptions: string;
}

function Dashboard() {
  const [value, setValue] = React.useState<IValue>({
    name: "312312",
    price: "123213",
    descriptions: "21312312",
  });
  const dispatch = useDispatch();
  const onGetValue = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const pushValue = () => {
    dispatch({ type: constants.POST_DATA, payload: value });
    dispatch({ type: constants.GET_DATA });

    // setValue({
    //   name: "",
    //   price: "",
    //   descriptions: "",
    // });
  };

  return (
    <>
      <div className="dash-board">
        <Form name="basic" labelCol={{ span: 24 }} autoComplete="off">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Không được để trống !" }]}
          >
            <Input
              onChange={onGetValue}
              name="name"
              value={value?.name}
              placeholder="Nhâp tên"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Không được để trống !" }]}
          >
            <Input
              onChange={onGetValue}
              name="price"
              value="sdádasd"
              placeholder="Nhập giá"
            />
          </Form.Item>

          <Form.Item
            label="Descriptions"
            name="descriptions"
            rules={[{ required: true, message: "Không được để trống !" }]}
          >
            <Input
              onChange={onGetValue}
              name="descriptions"
              value={value?.descriptions}
              placeholder="Nhập mô tả"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={pushValue}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <TableData />
      </div>
    </>
  );
}

export default Dashboard;
