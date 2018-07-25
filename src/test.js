import axios from 'axios';

export default async function () {
  return axios.get('http://thecatapi.com/api/images/get');
}
