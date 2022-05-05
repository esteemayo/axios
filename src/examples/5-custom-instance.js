import axios from 'axios';
import { useEffect } from 'react';

import authFetch from 'axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  useEffect(() => {
    (async () => {
      try {
        const resp1 = authFetch('/react-store-products');
        const resp2 = axios(randomUserUrl);

        const [products, user] = await Promise.all([resp1, resp2]);

        console.log('Products : ', products);
        console.log('User : ', user);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};

export default CustomInstance;
