import dumbell from '../assets/dumbell.png';
import Nav from './Nav';
const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 h-20">
      <div className="flex gap-3 justify-center">
        <img src={dumbell} alt="logo" className="w-12 h-12 md:w-16 md:h-16" />
        <h1 className="text-2xl md:text-4xl font-logo relative right-3 top-3 md:top-5 text-orange-400">
          Strength<span className="text-blue-400">Era</span>
        </h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
