// Authentication
// Build a login form to authenticate my users.
// Build a `axiosWithAuth` module to create an instance of axios with the authentication header
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // config object
    baseURL: "http://localhost:5000/api/issues",
    headers: {
      authorization: token,
    },
  });
};
