import Link from "next/link";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Layout from "../../components/Layout";

const positions = [
  {
    id: 1,
    title: "Raktáros, targoncavezető, áruátvevő",
    type: "Teljes munkaidős",
    location: "Dunaújváros",
    href: "/allasajanlatok/targoncavezetes",
  },
  {
    id: 2,
    title: "Tégla tesztelő",
    type: "Részmunkaidős",
    location: "Dunaújváros",
    href: "/allasajanlatok/teglateszteles",
  },
];

function jobOffers() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-8 font-bold text-center">Dolgozz nálunk!</h1>

        <div className="shadow-[0_5px_35px_-8px_rgba(0,0,0,0.3)] max-w-7xl w-full overflow-hidden sm:rounded-md">
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Aktuális állásajánlataink
            </h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {positions.map((position) => (
              <li key={position.id}>
                <Link href={position.href}>
                  <a className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-epgreen truncate hover:underline">
                          {position.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {position.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"></p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.location}
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default jobOffers;
