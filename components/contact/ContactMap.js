import Image from "next/image";
import contactPic from "../../public/DJI_0139.jpeg";

const ContactMap = () => {
  return (
    <>
      <div className="relative lg:py-16 bg-white">
        <div
          className="hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block rounded-3xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto  lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 pointer-events-none lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-28 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-white lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-sm lg:p-0 rounded-3xl">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-h-2 lg:aspect-w-3">
                  <Image
                    className="rounded-3xl  bg-white"
                    src={contactPic}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative h-60 lg:h-full mt-6 lg:mt-0 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5446.225061138273!2d18.912507!3d46.959479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47421741b9b32b5f%3A0x392f24b52abb66e3!2zRHVuYcO6anbDoXJvcywgQnVkYWkgTmFneSBBbnRhbCDDunQgMSwgMjQwMA!5e0!3m2!1shu!2shu!4v1650736003378!5m2!1shu!2shu"
                width="100%"
                className="h-full absolute inset-0 rounded-3xl border-[3px] border-epgreen"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md max-w-7xl mx-auto mt-12"></div>
    </>
  );
};

export default ContactMap;
