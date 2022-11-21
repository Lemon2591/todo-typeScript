import axios from "axios";
import { IValuePost } from "../reducer/dataReducer";

function postData(data: IValuePost["data"]): Promise<any> {
  const getData = "http://localhost:8080/data";
  return axios({
    method: "post",
    url: getData,
    data: data,
  }).then((res) => res.data);
}

function getData(): Promise<any> {
  const getData = "http://localhost:8080/data";
  return axios({
    method: "get",
    url: getData,
  }).then((res) => res.data);
}

function delData(data: number): Promise<any> {
  return axios({
    method: "delete",
    url: `http://localhost:8080/data/${data}`,
  }).then((res) => res.data);
}

function repairData(data: {
  key: string;
  name: string;
  price: string;
  descriptions: string;
}): Promise<any> {
  return axios({
    method: "put",
    url: `http://localhost:8080/data/${Number(data.key)}`,
    data: data,
  }).then((res) => res.data);
}

export { getData, delData, postData, repairData };
