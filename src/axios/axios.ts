import axios from 'axios';

// on créé une instance axios avec la base url pré configuré
// de partout on va utiliser notre instance plutot que axios classique comme ça la base url ne sera pas à répéter à chaque fois
const axiosInstance = axios.create({
  baseURL: 'https://orecipesapi.onrender.com/api',
});
export const addTokenToAxiosInstance = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeTokenFromAxiosInstance = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
