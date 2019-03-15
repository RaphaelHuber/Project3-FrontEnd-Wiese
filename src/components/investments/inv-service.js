import axios from 'axios';
import API_URL from '../../config.js';

class InvService {
  constructor() {
    let service = axios.create({
      baseURL: `${API_URL}/investments`,
      withCredentials: true
    });
    this.service = service;
  }

  invest(investor, project, invAmount) {
    return this.service.post('/', {investor, project, invAmount})
    .then(response => response.data)
  }
}

export default InvService;
