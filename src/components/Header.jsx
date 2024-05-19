import dumbell from '../assets/dumbell.png';
import Nav from './Nav';
const Header = () => {
  return (
    <div className="flex justify-between px-20 h-20 border-red-200 ">
      <div className="flex gap-3 justify-center">
        <img src={dumbell} alt="logo" />
        <h1 className="text-4xl font-logo relative top-5">
          {' '}
          Strength<span className="text-pink-950">Era</span>
        </h1>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
