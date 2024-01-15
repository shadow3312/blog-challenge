import axios from "axios";
import { apiRoot } from "../constants";

const client = axios.create({
  baseURL: apiRoot,
  timeout: 10000,
});

export default client;
