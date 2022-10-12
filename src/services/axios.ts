import axios from "axios";

const ins = axios.create({
  baseURL: "https://be-homework.vercel.app/api",
  timeout: 10000,
});

export default ins;
