import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: "Reminder emails",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: MailIcon,
  },
];

const Mission = () => {
  return (
    <>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Az Épduker Küldetése
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Transfer funds world-wide
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-epgreen text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10  relative lg:mt-0" aria-hidden="true">
              <div className="bg-white lg:w-[75%] lg:float-right rounded-md lg:shadow-2xl  py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
                <div className=" mx-auto lg:max-w-none">
                  <div className=" text-2xl font-semibold mb-8">
                    Lépjen velünk kapcsolatba!
                  </div>
                  <form className="grid gap-y-6">
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Full name
                      </label>
                      <input
                        value=""
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        value=""
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Phone +36701234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border border-gray-300 rounded-md"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-epgreen border border-eplight hover:border-epgreen  focus:outline-none"
                      >
                        Küldés
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mission;
