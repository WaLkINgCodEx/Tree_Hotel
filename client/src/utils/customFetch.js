import axios from "axios";
const customFetch = axios.create({
  // baseURL: "/api/v1/",
  baseURL: "/.netlify/functions/api/",
});

export default customFetch;
