import { useContext, useEffect, useState } from 'react';
import { ExercisesContext } from '../App';
import axios from 'axios';
import {
  bodyPartExercisesOptions,
  bodyPartsListOptions,
} from '../utils/fetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { breakpoints } from '../utils/breakpoints';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BodyParts = () => {
  const [bodyParts, setBodyParts] = useState(
    null || JSON.parse(localStorage.getItem('bodyParts'))
  );
  const [bodyPart, setBodyPart] = useState('back');
  const context = useContext(ExercisesContext);
  const { setExercises } = context;
  const [images, setImages] = useState({});

  useEffect(() => {
    if (Object.keys(images).length === 0) {
      const importImages = async () => {
        const loadedImages = {};
        for (const partName of bodyParts) {
          const imagePath = await import(`../assets/bodyParts/${partName}.png`);
          loadedImages[partName] = imagePath.default;
        }
        setImages(loadedImages);
      };

      importImages();
    }
  }, [bodyParts, images]);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const response = await axios.request(
          bodyPartExercisesOptions(bodyPart)
        );
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getExercises();
  }, [bodyPart, setExercises]);

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
        <img src={images[part]} alt={part} className="hover:scale-105" />
        <h4>{part}</h4>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      className="mySwiper w-8/12 md:w-10/12 px-10 md:px-20 my-20"
      spaceBetween={10}
      breakpoints={breakpoints}
      modules={[Navigation]}
      navigation={true}
      onClick={(swipper) => setBodyPart(swipper.clickedSlide.id)}
    >
      {bodyPartSlide}
    </Swiper>
  );
};

export default BodyParts;
