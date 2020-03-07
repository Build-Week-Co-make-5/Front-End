// Authentication
// Build a login form to authenticate my users.
// Build a `axiosWithAuth` module to create an instance of axios with the authentication header
import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // config object
    headers: {
      authorization: token,
    },
    baseURL: "https://bw-pt-co-make5.herokuapp.com/"
  })
};

export default axiosWithAuth;

//const {issues, setIssues} = useContext(localStorage.getItem("issues")) ADD THIS

