import axios from "axios";
const Base_URL = "http://localhost:4000";

export class ApiService {
  signup(usersDetails) {
    const result = axios.post(`http://localhost:4000/signup`, usersDetails);
    return result;
  }
}

const apiService = new ApiService();
export default apiService;
