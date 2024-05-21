import { useParams } from 'react-router-dom';

const Exercise = () => {
  let { exerciseId } = useParams();
  return <div>hello</div>;
};

export default Exercise;
