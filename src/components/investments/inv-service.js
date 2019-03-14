import axios from 'axios';

class InvService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/investments`,
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
