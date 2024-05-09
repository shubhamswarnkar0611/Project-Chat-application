import axios from "axios";
const Base_URL = "http://localhost:4000";

export class ApiService {
  signup(usersDetails) {
    const result = axios.post(`${Base_URL}/signup`, usersDetails);
    return result;
  }
  login(loginDetails) {
    const result = axios.post(`${Base_URL}/login`, loginDetails);
    return result;
  }
  getUserData(token) {
    const result = axios.post(`${Base_URL}/getUserData`, { token });
    return result;
  }
  sendMessage(message,senderId,receiverId) {
    const result = axios.post(`${Base_URL}/sendMessage`, { message,senderId,receiverId});
    return result;
  }

  getAllMessages(senderId,receiverId) {
    const result = axios.post(`${Base_URL}/getAllMessage`,{senderId,receiverId});
    return result;
  }
  getAllUsers() {
    const result = axios.get(`${Base_URL}/getAllUsers`);
    return result;
  }
}

const apiService = new ApiService();
export default apiService;
