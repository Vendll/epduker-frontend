import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
  ClipboardCheckIcon,
  ClockIcon,
  ChartBarIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";
import ContactForm from "../forms/ContactForm";

const transferFeatures = [
  {
    id: 1,
    name: "Megfelelni a folyamatosan változó vevői elvárásoknak. ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ClipboardCheckIcon,
  },
  {
    id: 2,
    name: "Vásárlóink gyors és pontos kiszolgálása.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ClockIcon,
  },
  {
    id: 3,
    name: "A termékek, szolgáltatások minőségének legmagasabb szinten tartása.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ChartBarIcon,
  },
  {
    id: 4,
    name: "Legszélesebb termékkínálat nyújtása partnereink részére.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ColorSwatchIcon,
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
              20 éves múlttal rendelkező építőanyag kereskedelemmel foglalkozó
              kizárólag hazai tulajdonban lévő dinamikusan fejlődő vállalkozás.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <p className="mt-3 text-lg text-gray-500">
                Kezdetben általános építőanyagok kereskedelmével indultunk, mint
                falazóelemek, tetőcserepek, víz-és hőszigetelő rendszerek. Mára
                azonban forgalmazott termékeink körét jelentősen kibővítve
                egyedi építőanyag kereskedelmi szolgáltatást nyújtunk meglévő,
                és új partnereinknek. Az Épduferr Nyrt. ennek köszönhetően rövid
                időn belül rohamos fejlődést ért el, és egyre meghatározóbb
                szerepet tölt be a piacon.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight sm:text-3xl mt-3">
                Kiemelt célkitűzéseink:
              </h3>

              <dl className="mt-10 space-y-4">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt className="relative h-12 ">
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-epgreen text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 flex items-center h-12 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10  relative lg:mt-0" aria-hidden="true">
              <div className="bg-white lg:w-[80%] hover:scale-105 duration-600 transition-all lg:float-right rounded-md lg:shadow-2xl">
                <ContactForm />
                {/* <div className=" mx-auto lg:max-w-none">
                  <div className=" text-2xl font-semibold mb-8">
                    Lépjen velünk kapcsolatba!
                  </div>
                  <form className="grid gap-y-6">
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Név
                      </label>
                      <input
                        value=""
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Név"
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
                        Telefonszám
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                        placeholder="Telefonszám"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Üzenet
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-epgreen focus:border-epgreen border border border-gray-300 rounded-md"
                        placeholder="Üzenet"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-3 w-full shadow-sm text-base font-medium rounded-md text-white bg-epgreen border-2 border-white hover:border-epgreen  focus:outline-none"
                      >
                        Küldés
                      </button>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mission;
