import { useEffect } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'x-rapidapi-key': 'bc9e5af09dmsh6e5791e1d29ebb3p170a7bjsne829d9bcae2d',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
const BodyParts = () => {
  useEffect(() => {});
  return <div>BodyParts</div>;
};

export default BodyParts;
