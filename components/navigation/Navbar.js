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
import logoPic from "../../public/logo.png";
import NavItem from "./NavItem";

const navigation = [
  { name: "Kezdőlap", href: "/", current: true },
  {
    name: "Termékek",
    href: "/termekek",
    current: false,
    categories: { data: [1, 2, 3, 4, 5] },
  },
  { name: "Szolgáltatások", href: "#", current: false },
  { name: "Állásajánlatok", href: "/allasajanlatok", current: false },
  { name: "Kapcsolat", href: "/kapcsolat", current: false },
];
const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions",
    href: "#",
    icon: DocumentReportIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ categories }) => {
  const navigations = {
    categories: [
      {
        id: "products",
        name: "Termékek",
        sections: categories,
      },
    ],
    pages: [
      { name: "Kezdőlap", href: "/" },
      { name: "Termékek", href: "#" },
      { name: "Szolgáltatások", href: "/szolgaltatasok" },
      { name: "Állásajánlatok", href: "/allasajanlatok" },
      { name: "Kapcsolat", href: "/kapcsolat" },
    ],
  };
  console.log("=========categories2===================");
  console.log(categories);
  console.log("====================================");
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
                {/* <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigations.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "text-epgreen"
                                    : "text-gray-700 hover:text-epgreen",
                                  "relative z-10 flex items-center justify-center outline-none transition-colors ease-out duration-200 text-base font-medium"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute top-[7.5rem] border-y border-gray-200 inset-x-0 z-50">
                                <div className="relative bg-white">
                                  <div className="max-w-7xl mx-auto px-8">
                                    <div className="grid grid-cols-3 gap-y-10 gap-x-8 py-10 text-sm text-gray-500">
                                      {category.sections.map(
                                        (column, columnIdx) => (
                                          <div
                                            key={columnIdx}
                                            className="space-y-10"
                                          >
                                            {column.map((section) => (
                                              <div key={section.name}>
                                                <p
                                                  id={`${category.id}-${section.id}-heading`}
                                                  className="font-medium text-gray-900"
                                                >
                                                  {section.name}
                                                </p>
                                                <ul
                                                  role="list"
                                                  aria-labelledby={`${category.id}-${section.id}-heading`}
                                                  className="mt-2"
                                                >
                                                  {section.items.map((item) => (
                                                    <li
                                                      key={item.name}
                                                      className="flex"
                                                    >
                                                      <a
                                                        href={item.href}
                                                        className="hover:text-gray-800"
                                                      >
                                                        {item.name}
                                                      </a>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            ))}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigations.pages.map((page) => (
                      <Link key={page.name} href={page.href}>
                        <a className="flex items-center text-base font-medium text-gray-700 hover:text-epgreen">
                          {page.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </Popover.Group> */}
                <div className="float-right flex gap-2 text-2xl">
                  <a className="hover:text-epgreen" href="#">
                    <FaFacebook />
                  </a>
                  <a className="hover:text-epgreen" href="#">
                    <FaInstagram />
                  </a>
                </div>
                {/* <NavItem item={navigations} /> */}
                {/* {navigation.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                  */}
              </nav>
            </div>

            <Disclosure.Panel
              as="nav"
              className="lg:hidden"
              aria-label="Global"
            >
              <Popover.Group className="flex lg:hidden border-y border-gray-200">
                <div className="h-full  flex flex-col space-y-3 my-4">
                  {navigations.categories.map((category) => (
                    <Popover key={category.name} className="flex relative">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "text-epgreen"
                                  : "text-gray-700 hover:text-epgreen",
                                "relative z-10 text-lg ml-6 flex items-center justify-center transition-colors focus:outline-none ease-out duration-200 text-lg font-medium"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute w-screen pl-0 top-10 border-y border-gray-200  z-50">
                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 py-4 text-lg text-gray-500">
                                    {category.sections.map(
                                      (column, columnIdx) => (
                                        <div
                                          key={columnIdx}
                                          className="space-y-10"
                                        >
                                          {column.map((section) => (
                                            <div key={section.name}>
                                              <p
                                                id={`${category.id}-${section.id}-heading`}
                                                className="font-medium text-gray-900"
                                              >
                                                {section.name}
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`${category.id}-${section.id}-heading`}
                                                className="mt-2"
                                              >
                                                {section.items.map((item) => (
                                                  <li
                                                    key={item.name}
                                                    className="flex ml-3"
                                                  >
                                                    <Link href={item.href}>
                                                      <a className="hover:text-gray-800">
                                                        {item.name}
                                                      </a>
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigations.pages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <a className="flex items-center ml-6 text-lg font-medium text-gray-700 hover:text-epgreen">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
