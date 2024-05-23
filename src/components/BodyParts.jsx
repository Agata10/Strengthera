import { useEffect, useState } from 'react';
import axios from 'axios';
import { bodyPartsListOptions } from '../utils/fetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { breakpoints } from '../utils/breakpoints';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BodyParts = () => {
  const [bodyParts, setBodyParts] = useState(
    null || JSON.parse(localStorage.getItem('bodyParts'))
  );
  const [bodyPart, setBodyPart] = useState('back');

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
  const bodyPartSlide = bodyParts.map((part) => {
    return (
      <SwiperSlide
        key={crypto.randomUUID()}
        id={part}
        className="cursor-pointer flex flex-col justify-center items-center"
      >
        <img src="" alt={part} />
        <h4>{part}</h4>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      className="mySwiper  w-8/12 md:w-10/12 h-16 px-10 md:px-20 my-20"
      spaceBetween={10}
      breakpoints={breakpoints}
      modules={[Navigation]}
      centeredSlides={true}
      navigation={true}
      onClick={(swipper) => setBodyPart(swipper.clickedSlide.id)}
    >
      {console.log(bodyPart)}
      {bodyPartSlide}
    </Swiper>
  );
};

export default BodyParts;
