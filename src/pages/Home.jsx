import Header from '../components/Header';
import back from '../assets/4805.jpg';
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full">
        <img src={back}></img>
        <h2 className="uppercase absolute w-1/2 top-6 left-1/3 transform -translate-x-1/6  font-workout font-extrabold text-4xl  sm:text-8xl  tracking-widest text-orange-400">
          Workout
        </h2>
      </div>
    </div>
  );
};
