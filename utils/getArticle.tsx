import axios from "axios";

const { SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'http://195.201.105.40:4000/api/article';

export default async function getArticle(id: string) {
    try {
      const response = await axios.get(`/${id}`);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }