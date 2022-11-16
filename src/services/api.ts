import axios from 'axios';

const api = axios.create({
 baseURL: 'https://fakestoreapi.com'
});

export const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api