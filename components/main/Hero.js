import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
import SAPic from "../../public/DJI_0139.jpeg";
import Image from "next/image";
import Link from "next/link";
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
        <SwiperSlide className="grid justify-items-center">
          <div className="absolute w-full h-full z-10 right-0 top-0 bg-black opacity-20"></div>
          <Image
            objectFit="cover"
            layout="fill"
            src={SAPic}
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <div className="absolute bottom-[50%] z-10 px-12 md:px-0 translate-y-1/2 md:left-12 w-screen lg:w-[40vw] ">
            <p className="text-6xl md:text-6xl text-[#f4f4f4]">
              Építőipari kereskedés
            </p>
            <p className="text-2xl md:text-3xl text-[#f4f4f4] font-thin mt-3 mb-8">
              Mindent egy helyen
            </p>
            <Link href="/termekek">
              <a className="px-6 py-2 mt-4 rounded-md bg-epgreen/80 hover:bg-epgreen">
                Ez a gomb
              </a>
            </Link>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="grid justify-items-center">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://picsum.photos/seed/b/1920/1080"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <div className="absolute bottom-[50%] px-12 md:px-0 translate-y-1/2 md:left-12 w-screen lg:w-[40vw] ">
            <p className="text-6xl md:text-8xl text-white">Slide 2</p>
            <p className="text-2xl md:text-3xl text-white font-thin">
              Valami dummy text
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid justify-items-center">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://picsum.photos/seed/c/1366/768"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <div className="absolute bottom-[50%] px-12 md:px-0 translate-y-1/2 md:left-12 w-screen lg:w-[40vw] ">
            <p className="text-6xl md:text-8xl text-white">Slide 3</p>
            <p className="text-2xl md:text-3xl text-white font-thin">
              Mégegy dummy text
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid justify-items-center">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://picsum.photos/seed/a/1600/900"
            className="object-cover h-full w-full"
            alt="bolt"
          />
          <div className="absolute bottom-[50%] px-12 md:px-0 translate-y-1/2 md:left-12 w-screen lg:w-[40vw] ">
            <p className="text-6xl md:text-8xl text-white">Slide 4</p>
            <p className="text-2xl md:text-3xl text-white font-thin">
              Ennyi dummy text nincs is
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default Hero;
