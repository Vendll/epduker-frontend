import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavItem = (navigations) => {
  console.log("===============categories3================");
  console.log(navigations);
  console.log("====================================");
  return (
    <>
      <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
        <div className="h-full flex space-x-8">
          {navigations.navigations.categories.map((category) => (
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
                            {category.sections.map((column, columnIdx) => (
                              <div key={columnIdx} className="space-y-10">
                                {console.log("column", column)}

                                <div key={column.title}>
                                  <p
                                    id={`${category.id}-${column.slug}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    {column.title}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${category.id}-${column.slug}-heading`}
                                    className="mt-2"
                                  >
                                    {column.subcategories.map((item) => (
                                      <li key={item.title} className="flex">
                                        <a
                                          href={item.slug}
                                          className="hover:text-gray-800"
                                        >
                                          {item.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}

          {navigations.navigations.pages.map((page) => (
            <Link key={page.name} href={page.href}>
              <a className="flex items-center text-base font-medium text-gray-700 hover:text-epgreen">
                {page.name}
              </a>
            </Link>
          ))}
        </div>
      </Popover.Group>
      {/*  <Link key={item.id} href={`/${item.item.slug}`}>
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
      </Popover.Group> */}
    </>
  );
};

export default NavItem;
