import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

export default {
  getFormFields() {
    return axios.get('https://all-is-well.azurewebsites.net/api/store/');
  },
  submitForm(formData) {
    return axios.post(`${API_BASE_URL}/form`, formData);
  },
  updateForm(formData) {
    return axios.post(`${API_BASE_URL}/form-fields`, formData);
  },
};