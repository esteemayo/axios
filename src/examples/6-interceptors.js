import { useEffect } from 'react';
import authFetch from 'axios/interceptors';

// const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await authFetch('/react-store-products');
        console.log(data);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};

export default Interceptors;
