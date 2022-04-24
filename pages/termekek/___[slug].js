import { useState, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { CheckIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

const product = {
  name: "POROTHERM 30 KLÍMA TÉGLA",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure. 30 cm vastag, kiemelkedő hőszigetelő képességű fal építésére ajánlott falazóelem. • Hőátbocsátási tényező: 0,29 W/m2K (M 5 L habarccsal, 2 cm hőszigetelő vakolattal, λ≤0,09 W/mK) • Tűzállósági határérték: EI 240, REI 180 (vakolt szerkezetre) • Anyagszükséglet: 16 db/m2 • Kötőanyag-igény: 23,75 l/m2 (számított, száraz hőszigetelő falazóhabarcsra) • Műszaki alap: MSZ EN 771-1:2011+A1:2015 Alkalmazási előnyök: • Vékonyabb fal, nagyobb hasznos alapterület (U = PTH 30 N+F + kb. 6 cm EPS hőszigetelés) • Hosszú élettartam, több mint 100 év • Egészséges lakóklíma (100 % természetes anyag) • Nagy nyomószilárdság • Nem éghető (A1) • Rendelkezik a Porotherm termékek előnyeivel (jó hőtároló, ideális akusztikai képesség, jól vakolható, stb.) Alkalmazható kötőanyag: hőszigetelő falazóhabarcs. Magasság (mm)249 Hosszúság (mm)250 Szélesség (mm)300 Nyomószilárdság (N/mm²)10 Súly (kg)13,20 Kötőanyag igény23,75",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <main>
        {/* Product */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              {/* <nav aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                  {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                    <li key={breadcrumb.id}>
                      <div className="flex items-center text-sm">
                        <a
                          href={breadcrumb.href}
                          className="font-medium text-gray-500 hover:text-gray-900"
                        >
                          {breadcrumb.name}
                        </a>
                        {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                          <svg
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            aria-hidden="true"
                            className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                          >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                          </svg>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </nav> */}
              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>
              </div>
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                {/* <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    {product.price}
                  </p>
                </div> */}

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {product.description}
                  </p>
                </div>

                {/* <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    In stock and ready to ship
                  </p>
                </div> */}
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <form className="rounded-md shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] p-6">
                  <div className="grid gap-y-6">
                    <h2 className="text-xl text-center font-bold">
                      Megrendelés
                    </h2>
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Teljes név
                      </label>
                      <input
                        /* onChange={handleChange} */
                        /* value={name} */
                        type="text"
                        name="name"
                        id="name"
                        required
                        autoComplete="name"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                        placeholder="Teljes név"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        /* onChange={handleChange} */
                        /* value={email} */
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Telefon
                      </label>
                      <input
                        /* onChange={handleChange} */
                        /* value={phone} */
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                        placeholder="Telefon +36701234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Üzenet
                      </label>
                      <textarea
                        /* onChange={handleChange} */
                        /* value={message} */
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Üzenet"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-epgreen hover:border-epgray focus:outline-none"
                      >
                        Küldés
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
