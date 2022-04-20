import Image from "next/image";
import iconOne from "../../public/forklift.png";
import iconTwo from "../../public/credit-card-2.png";
import iconThree from "../../public/delivery.png";
import iconFour from "../../public/consultation.png";

const incentives = [
  {
    name: "Építőipari termékek értékesítése",
    description: "Tekintse meg széles termékkínálatunkat.",
    imageSrc: iconOne,
  },
  {
    name: "Bankkártyás fizetés",
    description:
      "Természetesen nálunk is biztosított az elektronikus fizetés lehetősége.",
    imageSrc: iconTwo,
  },
  {
    name: "Kiszállítás",
    description: "Termékeinket darus autóval helyszínre lerakodva szállítjuk.",
    imageSrc: iconThree,
  },
  {
    name: "Pályázati tanácsadás",
    description: "Termékeinket darus autóval helyszínre lerakodva szállítjuk.",
    imageSrc: iconFour,
  },
];

const Szolgaltatasok = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
        <div className="text-center text-5xl pb-8 pt-16 font-bold text-gray-900">
          Szolgáltatásaink
        </div>
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 pb-16 gap-x-8 lg:max-w-none lg:grid-cols-4">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root relative h-24 w-full">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    className="w-28 h-24 mx-auto"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Szolgaltatasok;
