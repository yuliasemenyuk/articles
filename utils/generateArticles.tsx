import axios from "axios";


const { SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'https://energy.kaaiot.com/api/articles';


export const generateArticles = 
    async (url: string) => {
      try {
        const response = await axios.post('/', 
        {
          url: url
        });
        return response.data;
        
      } catch (error) {
        console.log(error);
      }
    }