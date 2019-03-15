let API_URL = 'https://wiese.herokuapp.com';

if (window.location.href.includes('localhost')) {
  API_URL = 'http://localhost:5000';
}

export default API_URL;