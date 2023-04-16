import axios from "axios";


const { SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'http://195.201.105.40:4000/api/article';


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