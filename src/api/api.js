import axios from "axios";

export default axios.create({
  baseURL: "https://t-vault-api-backend.herokuapp.com",
});
