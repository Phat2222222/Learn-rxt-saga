import { url } from "inspector";
import { ListParams, ListResponse } from "models/common";
import { Student } from "models/students";
import { urlGenerate } from "utils/functions";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    let query = urlGenerate(params);

    urlGenerate(params);
    const url = `/students?${query}`;
    return axiosClient.get(url);
  },

  getDetail(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  updateStudent(id: string, data: ListParams): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.patch(url, data);
  },

  addStudent(data: ListParams): Promise<Student> {
    const url = `/students`;
    return axiosClient.post(url, data);
  },
  deleteStudent(id: string) {
    const url = `/students/${id}`;
    return axiosClient.delete(url)
  },
};
export default studentApi;
