import Axios from 'axios';

const axiosIntance = Axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 15000,
});

export { axiosIntance };
