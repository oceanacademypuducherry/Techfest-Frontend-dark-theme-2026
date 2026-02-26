import axios from "axios";

export const UserAPI = axios.create({
  // baseURL:
  //   "http://127.0.0.1:5001/oceanlivereact/asia-south1/techfest_test_api/app",
  // baseURL: "https://techfest-api-y5x6yhhkmq-el.a.run.app/app",
  // baseURL:"https://techfest-test-api-y5x6yhhkmq-el.a.run.app/app"
  baseURL: "https://techfest-test-api-y5x6yhhkmq-el.a.run.app/app",
});

export default UserAPI;
