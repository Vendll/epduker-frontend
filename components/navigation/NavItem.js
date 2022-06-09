import { Popover } from "@headlessui/react";
import NavItemIffer from "./NavItemIffer";

const NavItem = ({ navigations }) => {
  return (
    <>
      {/* PC NAV */}
      <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
        <div className="h-full flex space-x-8">
          {navigations.categories.map((category) => (
            <NavItemIffer category={category} />
            /*  <Popover key={category.name} className="flex">
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
                          <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-10 text-sm text-gray-500">
                            {category.sections.map((categ, categIdx) => (
                              <div key={categIdx} className="space-y-10">
                                <div key={categ.title}>
                                  <Link href={`/termekek/${categ.slug}`}>
                                    <a
                                      id={`${category.id}-${categ.slug}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {categ.title}
                                    </a>
                                  </Link>
                                  <SubNavItem
                                    categ={categ}
                                    category={category}
                                  />
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
            </Popover> */
          ))}

          {/* {navigations.pages.map((page) => (
            <Link key={page.name} href={page.href}>
              <a className="flex items-center text-base font-medium text-gray-700 hover:text-epgreen">
                {page.name}
              </a>
            </Link>
          ))} */}
        </div>
      </Popover.Group>
      {/* MOBILE NAV */}
      <Popover.Group className="flex lg:hidden border-y border-gray-200">
        <div className="h-full  flex flex-col space-y-3 my-4">
          {navigations.categories.map((category) => (
            <NavItemIffer category={category} />
            /* <Popover key={category.name} className="flex relative">
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
                            {category.sections.map((categ, categIdx) => (
                              <div key={categIdx} className="space-y-10">
                                <div key={categ.title}>
                                  <Link href={`/termekek/${categ.slug}`}>
                                    <a
                                      id={`${category.id}-${categ.slug}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {categ.title}
                                    </a>
                                  </Link>
                                  <SubNavItem
                                    categ={categ}
                                    category={category}
                                  />
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
            </Popover> */
          ))}

          {/* {navigations.pages.map((page) => (
            <Link key={page.name} href={page.href}>
              <a className="flex items-center ml-6 text-lg font-medium text-gray-700 hover:text-epgreen">
                {page.name}
              </a>
            </Link>
          ))} */}
        </div>
      </Popover.Group>
    </>
  );
};

export default NavItem;
