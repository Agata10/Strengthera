import { Swiper, SwiperSlide } from 'swiper/react';
import { breakpoints } from '../utils/breakpoints';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const DaysSwiper = ({ setDay, dispatch }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGetExericses = (d) => {
    dispatch({ type: 'GET_EXERCISE', payload: { day: d } });
    setDay(d);
  };
  return (
    <Swiper
      className="mySwiper relative h-16 px-10 md:px-20"
      spaceBetween={10}
      breakpoints={breakpoints}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      onClick={(swipper) => setActiveIndex(swipper.clickedIndex)}
    >
      {days.map((d, index) => (
        <SwiperSlide
          key={d}
          id={index}
          className={`${
            index == activeIndex ? 'active' : ''
          } cursor-pointer h-11 bg-orange-400 rounded hover:bg-blue-500 w-24 flex items-center justify-center text-slate-50 	`}
          onClick={() => handleGetExericses(d)}
        >
          {d}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DaysSwiper;
