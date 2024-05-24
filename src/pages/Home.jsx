import Header from '../components/Header';
import back from '../assets/4805.jpg';
import SearchWrapper from '../components/SearchWrapper';
import BodyParts from '../components/BodyParts';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full flex justify-center items-center">
        <img src={back} className="w-10/12"></img>
        <h2 className="uppercase absolute top-6 xl:top-11 font-workout font-extrabold text-4xl sm:text-7xl lg:text-8xl mix-blend-multiply tracking-widest  bg-gradient-to-t from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Workout
        </h2>
      </div>
      <BodyParts />
      <SearchWrapper />
      <Footer />
    </div>
  );
};
