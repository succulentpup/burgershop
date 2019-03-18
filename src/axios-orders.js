import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://burgershop-d9aaa.firebaseio.com/"
});

export default instance;
