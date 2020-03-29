import axios from 'axios';

export const signup = userData => axios.post('api/users/signup', userData).then((response) => ({ response }));
export const login = userData => axios.post('api/users/login', userData);
