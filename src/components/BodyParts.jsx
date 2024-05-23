import { useEffect, useState } from 'react';
import axios from 'axios';
import { bodyPartsListOptions } from '../utils/fetchData';

const BodyParts = () => {
  const [bodyParts, setBodyParts] = useState(
    null || JSON.parse(localStorage.getItem('bodyParts'))
  );
  useEffect(() => {
    if (!bodyParts) {
      const getBodyPartsList = async () => {
        try {
          const response = await axios.request(bodyPartsListOptions);
          setBodyParts(bodyParts);
          localStorage.setItem('bodyParts', JSON.stringify(response.data));
        } catch (error) {
          console.error(error);
        }
      };
      getBodyPartsList();
    }
  }, [bodyParts]);

  return <div>BodyParts</div>;
};

export default BodyParts;
