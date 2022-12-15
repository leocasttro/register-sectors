import axios from "axios";

const jobFetch = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-Type": "application/json", 
  },
});

export default jobFetch;