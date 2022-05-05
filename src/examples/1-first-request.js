import axios from 'axios';
import { useEffect } from 'react';

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(url);
        console.log(data);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};

export default FirstRequest;
