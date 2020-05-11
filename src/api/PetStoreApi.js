import axios from "axios";

export const psFindByStatus = axios.create({
  baseURL: "https://petstore.swagger.io/v2/pet/findByStatus"
});
