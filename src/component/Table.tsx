import React from "react";
import { Space, Table, Tag, Button, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import constants from "../redux/action/constants";

const { Column, ColumnGroup } = Table;

export interface IDataType {
  key: string;
  name: string;
  price: string;
  descriptions: string;
}

const TableData: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [value, setValue] = React.useState({
    key: "",
    name: "",
    price: "",
    descriptions: "",
  });

  const handleChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const showModal = (data: IDataType) => {
    setValue({
      key: data.key,
      name: data.name,
      price: data.price,
      descriptions: data.descriptions,
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch({ type: constants.RE_DATA, payload: value });
    setIsModalOpen(false);
    dispatch({ type: constants.GET_DATA });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: constants.GET_DATA });
  }, []);

  const datas: {}[] = useSelector((state: any) => state.postData.data);

  const dataTable: {
    key: string;
    name: any;
    price: any;
    descriptions: any;
  }[] = datas?.map((data: any) => {
    return {
      key: String(data.id),
      name: data.name,
      price: data.price,
      descriptions: data.descriptions,
    };
  });
  const handleDel = (id: string) => {
    dispatch({ type: constants.DEL_DATA, payload: Number(id) });
    dispatch({ type: constants.GET_DATA });
  };

  return (
    <>
      <Modal
        title="Sửa thông tin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="input-repiar">
            <label>Name :</label>
            <input
              placeholder="Nhập tên"
              value={value.name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="input-repiar">
            <label>Price :</label>
            <input
              placeholder="Nhập giá"
              value={value.price}
              name="price"
              onChange={handleChange}
            />
          </div>

          <div className="input-repiar">
            <label>Desctiptions :</label>
            <input
              placeholder="Nhập mô tả"
              value={value.descriptions}
              name="descriptions"
              onChange={handleChange}
            />
          </div>
        </div>
      </Modal>

      <Table dataSource={dataTable}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column
          title="Descriptions"
          dataIndex="descriptions"
          key="descriptions"
        />

        <Column
          title="Action"
          key="action"
          render={(_: any, record: IDataType) => (
            <Space size="middle">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  showModal(record);
                }}
              >
                Sửa
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                danger
                onClick={() => {
                  handleDel(_.key);
                }}
              >
                Xoá
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default TableData;
