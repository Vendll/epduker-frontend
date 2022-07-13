import Image from "next/image";
import SAPic from "../../public/bolt.jpg";

const ShortAbout = () => {
  return (
    <div className="bg-white  pt-16 lg:py-24">
      <div className="pb-16 bg-epgreen lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="relative aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Image
                  src={SAPic}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <div>
                <p className="text-2xl font-medium text-white mb-4">
                  Építőanyag Kereskedés az Ön szolgálatában.
                </p>
                <p className="text-white">
                  Nálunk mindent egy helyen megtalál, ami egy építkezéshez
                  szükséges: kiváló minőségű építőanyagok – kedvező áron. Az
                  Épduferr Nyrt. évtizedek tapasztalatával a háta mögött kínálja
                  mindezt Partnerei számára. Ennek szellemében a vásárlói
                  igények ismeretében, tapasztalt munkatársaink készségesen
                  ismertetik a különböző lehetőségeket, bemutatják
                  áruválasztékunkat. Vásárlóink számára nagy biztonságot és
                  kiszámíthatóságot jelent, hogy nagy választékunkat készletről
                  árusítjuk, és saját, önrakodós járműveinkkel házhoz is
                  szállítjuk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortAbout;
