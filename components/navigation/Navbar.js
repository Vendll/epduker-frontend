import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import logoPic from "../../public/logo.svg";
import NavItem from "./NavItem";
import Search from "./Search";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { Autocomplete } from "./Autocomplate";
import { ProductItem } from "./ProductItem";
import { h } from "preact";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const appId = process.env.NEXT_PUBLIC_ALGILIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGILIA_SECRET_KEY;
const searchClient = algoliasearch(appId, apiKey);

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

  return (
    <>
      <Disclosure as="header" className="bg-white shadow">
        {({ open, setOpen }) => (
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
                <Autocomplete
                  openOnFocus={true}
                  getSources={({ query }) => [
                    {
                      sourceId: "products",
                      getItems() {
                        return getAlgoliaResults({
                          searchClient,
                          queries: [
                            {
                              indexName: "product",
                              query,
                            },
                          ],
                        });
                      },
                      templates: {
                        item({ item, components }) {
                          return (
                            <div className="aa-ItemWrapper">
                              <div className="aa-ItemContent">
                                <div className="aa-ItemIcon">
                                  <Image
                                    src={item.image_url}
                                    alt={item.name}
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="aa-ItemContentBody">
                                  <a href={`/${item.url}`}>
                                    <div className="aa-ItemContentTitle">
                                      <components.Highlight
                                        hit={item}
                                        attribute="title"
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="aa-ItemActions">
                                <button
                                  className="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                                  type="button"
                                  title="Select"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                  >
                                    <path d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          );
                        },
                      },
                    },
                  ]}
                />
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
