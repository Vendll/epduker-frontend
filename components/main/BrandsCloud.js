import Image from "next/image";
import ytong from "../../public/logocloud/ytong.png";
import azzuro from "../../public/logocloud/azzuro.png";
import bachl from "../../public/logocloud/bachl.png";
import baumit from "../../public/logocloud/baumit.png";
import bramac from "../../public/logocloud/bramac.png";
import creaton from "../../public/logocloud/creaton.png";
import knauf from "../../public/logocloud/knauf.png";
import lasserberger from "../../public/logocloud/lasserberger.png";
import leier from "../../public/logocloud/leier.png";
import masterplast from "../../public/logocloud/masterplast.png";
import redline from "../../public/logocloud/redline.png";
import tondach from "../../public/logocloud/tondach.png";
import wienerberger from "../../public/logocloud/wienerberger.png";
import terran from "../../public/logocloud/terran.png";

const BrandsCloud = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[96rem] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Tekintse meg partnereinket!
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:grid-cols-7 lg:mt-8">
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={ytong}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={azzuro}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={bachl}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={baumit}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={bramac}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={creaton}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={knauf}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={lasserberger}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={leier}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={masterplast}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={redline}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={tondach}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={wienerberger}
              alt="Workcation"
            />
          </div>
          <div className="relative col-span-1 flex justify-center py-8 px-8 bg-white">
            <Image
              objectFit="contain"
              layout="fill"
              className="max-h-12"
              src={terran}
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandsCloud;
