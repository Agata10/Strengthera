import dumbell from '../assets/gym.png';
import { useState } from 'react';
import Nav from './Nav';
const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:pt-10 pb-5 md:pb-12 md:px-20 md:h-20 w-full bg-slate-50">
      <div className="flex justify-between w-full px-10 md:px-0">
        <div className="flex gap-3 justify-center">
          <img
            src={dumbell}
            alt="logo"
            className="w-10 h-10 mt-2 md:w-14 md:h-14"
          />
          <h1 className="text-2xl md:text-4xl font-logo relative right-2 top-3 md:top-5 text-orange-400">
            Strength<span className="text-blue-400">Era</span>
          </h1>
        </div>
        <button
          className="md:hidden"
          onClick={() => setVisible((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#60a5fa"
            className="size-9 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <Nav visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Header;
