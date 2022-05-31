import servicesPic from "../../public/service.jpg";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

const collections = [
  {
    name: "Építőipari termékek értékesítése",
    desc: "Tekintse meg széles termékkínálatunkat.",
    imageSrc: "/forklift.png",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Bankkártyás fizetés",
    desc: "Természetesen nálunk is biztosított az elektronikus fizetés lehetősége.",
    imageSrc: "/credit-card-2.png",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Kiszállítás",
    desc: "Termékeinket darus autóval helyszínre lerakodva szállítjuk.",
    imageSrc: "/delivery.png",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
  {
    name: "Pályázati tanácsadás",
    desc: "Termékeinket darus autóval helyszínre lerakodva szállítjuk.",
    imageSrc: "/consultation.png",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Layout>
      <div className="relative bg-white">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={servicesPic}
                layout="fill"
                objectFit="cover"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Szolgáltatásaink
            </h1>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-4 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-12 overflow-hidden group-hover:opacity-75">
                      <Image
                        src={collection.imageSrc}
                        layout="fill"
                        objectFit="contain"
                        alt={collection.imageAlt}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <p
                        aria-hidden="true"
                        className="font-semibold text-epgray"
                      >
                        {collection.name}
                      </p>
                      <h3 className="mt-1 text-epgray">
                        <span className="absolute inset-0" />
                        {collection.desc}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
