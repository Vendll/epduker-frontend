import { useState, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { CheckIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
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
    <div className="bg-gray-50">
      <main>
        {/* Product */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <nav aria-label="Breadcrumb">
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
              </nav>

              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {product.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    {product.price}
                  </p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    In stock and ready to ship
                  </p>
                </div>
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
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="sm:flex sm:justify-between">
                    {/* Size selector */}
                    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                        Size
                      </RadioGroup.Label>
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            as="div"
                            key={size.name}
                            value={size}
                            className={({ active }) =>
                              classNames(
                                active ? "ring-2 ring-epgreen" : "",
                                "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  {size.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                >
                                  {size.description}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-epgreen"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-lg pointer-events-none"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                    >
                      <span>What size should I buy?</span>
                      <QuestionMarkCircleIcon
                        className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <div className="mt-10">
                    <button
                      onClick={() => setIsOpen(true)}
                      type="button"
                      className="w-full bg-epgreen border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-epgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-epgreen"
                    >
                      Megrendelem
                    </button>
                  </div>
                  <Transition show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed inset-0 z-10 overflow-y-auto transition-all backdrop-blur-sm ease-out duration-300"
                      onClose={() => setIsOpen(false)}
                    >
                      <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                          className="inline-block h-screen align-middle"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Payment successful
                            </Dialog.Title>
                            <form
                              className="grid gap-y-6"
                              /* onSubmit={handleSubmit} */
                            >
                              <div>
                                <label htmlFor="full-name" className="sr-only">
                                  Full name
                                </label>
                                <input
                                  /* onChange={handleChange} */
                                  /* value={name} */
                                  type="text"
                                  name="name"
                                  id="name"
                                  autoComplete="name"
                                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                                  placeholder="Full name"
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
                                  autoComplete="email"
                                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                                  placeholder="Email"
                                />
                              </div>
                              <div>
                                <label htmlFor="phone" className="sr-only">
                                  Phone
                                </label>
                                <input
                                  /* onChange={handleChange} */
                                  /* value={phone} */
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  autoComplete="tel"
                                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                                  placeholder="Phone +36701234567"
                                />
                              </div>
                              <div>
                                <label htmlFor="message" className="sr-only">
                                  Message
                                </label>
                                <textarea
                                  /* onChange={handleChange} */
                                  /* value={message} */
                                  id="message"
                                  name="message"
                                  rows={4}
                                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-epgreen hover:border-epgray focus:outline-none"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="group inline-flex text-base font-medium"
                    >
                      <ShieldCheckIcon
                        className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="text-gray-500 hover:text-gray-700">
                        Lifetime Guarantee
                      </span>
                    </a>
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
