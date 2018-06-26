import axios from 'axios';

export const login = async (username, password) => {
  const { data } = await axios.post('/login', { username, password });
  return data;
}
