import axios, { AxiosResponse, Method } from "axios";

const request = (method: Method, url: string, data: Object) => {
  return axios({
    method,
    url: "http://localhost:80" + url,
    data,
  })
    .then((res: AxiosResponse<any>) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default request;
