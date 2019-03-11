import axios from 'axios';

class InvService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  invest(investor, project, amount) {
    return this.service.post('/', {investor, project, amount})
    .then(response => response.data)
  }
}

export default InvService;
