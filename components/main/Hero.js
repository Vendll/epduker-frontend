import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import boltPic from "../../public/bolt.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";

const images = [
  { url: "https://picsum.photos/seed/a/1600/900" },
  { url: "https://picsum.photos/seed/b/1920/1080" },
  { url: "https://picsum.photos/seed/c/1366/768" },
];

const Hero = () => {
  const swiperSlide = useSwiperSlide();

  return (
    <>
      <Swiper
        className="mt- h-[60vh]"
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, type: "bullets" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className=" grid justify-items-center ">
          <img
            src="https://picsum.photos/seed/a/1600/900"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <div className="absolute bottom-[50%] translate-y-1/2 lg:left-12 w-screen lg:w-[40vw] text-center">
            <p className="text-8xl text-white ">ÉpDuKker</p>
            <p className="text-5xl text-white ">
              Félelmetes képleírás, amit mindenki imád!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid justify-items-center">
          <img
            src="https://picsum.photos/seed/b/1920/1080"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <p className="bottom-[50%] translate-y-1/2 lg:left-12 w-screen lg:w-[40vw] text-center text-8xl text-white absolute">
            Slide 2
          </p>
        </SwiperSlide>
        <SwiperSlide className="grid justify-items-center">
          <img
            src="https://picsum.photos/seed/c/1366/768"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <p className="bottom-[50%] translate-y-1/2 lg:left-12 w-screen lg:w-[40vw] text-center text-8xl text-white absolute">
            Slide 3
          </p>
        </SwiperSlide>
        <SwiperSlide className="grid justify-items-center">
          <img
            src="https://picsum.photos/seed/a/1600/900"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <p className="bottom-[50%] translate-y-1/2 lg:left-12 w-screen lg:w-[40vw] text-center text-8xl text-white absolute">
            Slide 4
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Hero;
