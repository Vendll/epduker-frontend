import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  Dialog,
  Popover,
  Tab,
  Disclosure,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
  BellIcon,
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import logoPic from "../../public/logo.svg";
import NavItem from "./NavItem";

/* const navigation = {
  categories: [
    {
      id: "products",
      name: "Termékek",
      sections: categories,
    },
  ],
  pages: [
    /* { name: "Kezdőlap", href: "/" }, *
    { name: "Szolgáltatások", href: "/szolgaltatasok" },
    { name: "Állásajánlatok", href: "/allasajanlatok" },
    { name: "Kapcsolat", href: "/kapcsolat" },
  ],
}; */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ categories }) => {
  const navigations = {
    categories: [
      { name: "Kezdőlap", href: "/" },
      {
        id: "products",
        name: "Termékek",
        sections: categories,
      },
      { name: "Szolgáltatások", href: "/szolgaltatasok" },
      { name: "Hírek", href: "/blog" },
      { name: "Állásajánlatok", href: "/allasajanlatok" },
      { name: "Kapcsolat", href: "/kapcsolat" },
    ],
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Disclosure as="header" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-[106rem] mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div className="relative h-16 flex">
                <div className="relative z-10 px-2 flex lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    {/* Logo */}
                    <Link href="/">
                      <a className="flex">
                        <span className="sr-only">Épduker</span>
                        <Image
                          src={logoPic}
                          layout="fixed"
                          height={50}
                          width={100}
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                  <div className="w-full sm:w-96 ">
                    <label htmlFor="search" className="sr-only">
                      Keresés
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-epgreen focus:border-epgreen sm:text-sm"
                        placeholder="Keresés"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <nav
                /* NAgy nav*/
                className="hidden lg:py-4 lg:flex lg:space-x-8"
                aria-label="Global"
              >
                <NavItem navigations={navigations} categories={categories} />
                <div className="float-right flex gap-2 text-2xl">
                  <a className="hover:text-epgreen" href="#">
                    <FaFacebook />
                  </a>
                  <a className="hover:text-epgreen" href="#">
                    <FaInstagram />
                  </a>
                </div>
              </nav>
            </div>

            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <NavItem navigations={navigations} categories={categories} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
