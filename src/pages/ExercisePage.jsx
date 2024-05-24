import Exercise from '../components/Exercise';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExercisePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Exercise />
      <Footer />
    </div>
  );
};

export default ExercisePage;
