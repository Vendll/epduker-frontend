import { Popover } from "@headlessui/react";
import NavItemIffer from "./NavItemIffer";

const NavItem = ({ navigations }) => {
  return (
    <>
      {/* PC NAV */}
      <Popover className="hidden lg:flex-1 lg:block lg:self-stretch">
        <div className="h-full flex space-x-8">
          {navigations.categories.map((category) => (
            <NavItemIffer category={category} key={category.id} />
          ))}
        </div>
      </Popover>
      {/* MOBILE NAV */}
      <Popover className="flex lg:hidden border-y border-gray-200">
        <div className="h-full  flex flex-col space-y-3 my-4">
          {navigations.categories.map((category) => (
            <NavItemIffer category={category} key={category.id} />
          ))}
        </div>
      </Popover>
    </>
  );
};

export default NavItem;
