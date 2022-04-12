import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavItem = (item) => {
  const itemLen = Object.keys(item.item.categories).length;

  if (itemLen < 1) {
    return (
      <Link key={item.id} href={`/${item.item.slug}`}>
        <a className="flex flex-col lg:py-6 ml-3 lg:ml-0 font-medium text-lg lg:text-sm lg:flex-row lg:items-center text-bobgray hover:text-bobblue lg:hover:border-b-2 lg:hover:border-bobred">
          {item.item.title}
        </a>
      </Link>
    );
  } else {
    return (
      <Popover.Group key={item.item.title} as="div">
        <div className="h-full">
          <Popover className="flex flex-col lg:flex">
            {({ open }) => (
              <Fragment>
                <div className="relative flex">
                  <Popover.Button
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "text-bobred border-bobred"
                          : "text-bobgray border-transparent",
                        "inline-block  lg:py-9 lg:h-full ml-3 lg:ml-0 text-lg lg:text-sm font-medium focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0 hover:text-bobblue lg:hover:border-b-2 lg:hover:border-bobred"
                      )
                    }
                  >
                    {item.item.title}{" "}
                    {open ? (
                      <FaAngleUp style={"inlineBlock"} />
                    ) : (
                      <FaAngleDown />
                    )}
                  </Popover.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-in duration-150"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-out duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="lg:absolute lg:top-full lg:border-t lg:border-gray-200 lg:z-20 lg:inset-x-0">
                    <div
                      className="lg:absolute lg:inset-0 lg:top-1/3 lg:bg-white lg:shadow"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white">
                      <div className=" lg:mx-auto lg:px-8">
                        <div className="lg:grid lg:grid-rows-6 py-3 lg:py-8 text-sm space-y-2 text-bobblue">
                          {item.item.categories.data.map((navitem) => (
                            <div
                              key={navitem.attributes.slug}
                              className="ml-7 lg:my-3 "
                            >
                              <Link
                                href={`/categories/${encodeURIComponent(
                                  navitem.attributes.slug
                                )}`}
                              >
                                <a className="text-base lg:text-sm font-normal block text-bobgray hover:text-bobblue">
                                  {navitem.attributes.title}
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Fragment>
            )}
          </Popover>
        </div>
      </Popover.Group>
    );
  }
};

export default NavItem;
