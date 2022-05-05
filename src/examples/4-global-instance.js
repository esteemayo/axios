import axios from 'axios';
import { useEffect } from 'react';

const randomUserUrl = 'https://randomuser.me/api';
const productsUrl = 'https://course-api.com/react-store-products';

const GlobalInstance = () => {
  useEffect(() => {
    (async () => {
      try {
        const resp1 = axios(productsUrl);
        const resp2 = axios(randomUserUrl);

        const [products, user] = await Promise.all([resp1, resp2]);
        console.log('products : ', products);
        console.log('user : ', user);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};

export default GlobalInstance;
