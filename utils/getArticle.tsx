import axios from "axios";

const { REACT_APP_SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'http://localhost:4000/api/article';

export default async function getArticle(id: string) {
    try {
      const response = await axios.get(`/${id}`);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }