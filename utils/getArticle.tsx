import axios from "axios";

const { SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'https://energy.kaaiot.com/api/articles';

export default async function getArticle(id: string) {
    try {
      const response = await axios.get(`/${id}`);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }