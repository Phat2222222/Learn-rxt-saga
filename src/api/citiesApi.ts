import { City } from "models/city";
import axiosClient from "./axiosClient";
const cityApi = {
  getALL() {
    const url = "/cities";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};
export default cityApi;
