import servicesPic from "../../public/service.jpg";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Directus } from "@directus/sdk";

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
  /*  {
    name: "Pályázati tanácsadás",
    desc: "Termékeinket darus autóval helyszínre lerakodva szállítjuk.",
    imageSrc: "/consultation.png",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  }, */
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Szolgaltatasok({ categories }) {
  return (
    <Layout categories={categories}>
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
          <div className="max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6  sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <>
                <div
                  key={collection.name}
                  className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-5"
                >
                  <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                      <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        {collection.name}
                      </h3>
                      <p className="mt-6 text-base text-gray-500"></p>
                      <div className="mt-8">
                        <div className="flex items-center text-center lg:text-left">
                          <h4 className="lg:flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-epgreen">
                            {collection.desc}
                          </h4>
                          <div className="lg:flex-1 border-t-2 border-gray-200" />
                        </div>
                      </div>
                    </div>
                    <div className="py-28 relative bg-gray-50 w-full lg:w-64">
                      <div className="absolute inset-8 overflow-hidden">
                        <Image
                          src={collection.imageSrc}
                          layout="fill"
                          objectFit="contain"
                          alt={collection.imageAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find category */
  const categoriesData = await directus.items("Category").readByQuery({
    fields: ["title", "slug", "subcategories.title", "subcategories.slug"],
    limit: -1,
  });
  const categories = categoriesData.data;

  return {
    props: {
      categories,
    },
  };
}
