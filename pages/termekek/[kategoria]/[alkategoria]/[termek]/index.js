import { Directus } from "@directus/sdk";
import Image from "next/image";

function ProductPage({ product }) {
  return (
    <>
      {/* <h1 className="hidden">{product.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
        className="hidden"
      /> */}
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
                    {product.title}
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
                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className="text-base text-gray-500"
                    >
                      {/* {product.description} */}
                    </div>
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
                <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={product.imageSrc}
                    alt="kép helye" /* {product.imageAlt} */
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
    </>
  );
}

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find product */
  const getProductData = await directus.items("product").readByQuery({
    fields: ["*.*.*"],
    filter: {
      slug: params.termek,
    },
  });

  const product = getProductData.data[0];
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  const productsData = await directus.items("product").readByQuery({
    fields: ["*.*.*"],
  });

  const products = productsData.data;

  return {
    paths: products.map((product) => {
      return {
        params: {
          kategoria: product.category.category.slug,
          alkategoria: product.category.slug,
          termek: product.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default ProductPage;
