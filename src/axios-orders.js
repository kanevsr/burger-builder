import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ae7aa.firebaseio.com/'
});

export default instance;