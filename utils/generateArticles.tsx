import axios from "axios";


const { SERVER_HOST: HOST } = process.env;

axios.defaults.baseURL = 'http://localhost:4000/api/article';
// axios.defaults.baseURL = HOST;


// export const generateArticles = async (url: string) => 
//     await axios.post('/', 
//     url
//   )
//   .then(function (response) {
//     console.log(response.data);
//     return response.data;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


export const generateArticles = 
    async (url: string) => {
      try {
        const response = await axios.post('/', 
        {
          url: url
        });
        console.log(response.data);
        // console.log(HOST);
        
        return response.data;
        
        
      } catch (error) {
        console.log(error);
      }
    }