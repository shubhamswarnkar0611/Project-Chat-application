import axios from "axios";
const Base_URL = "http://localhost:4000";

export class ApiService {
  signup(usersDetails) {
    const result = axios.post(`${Base_URL}/signup`, usersDetails);
    return result;
  }
  login(loginDetails){
    const result = axios.post(`${Base_URL}/login`, loginDetails);
    return result;
  }
}

const apiService = new ApiService();
export default apiService;
