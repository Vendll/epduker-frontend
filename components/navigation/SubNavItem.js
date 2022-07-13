import { useState, useEffect } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";

const SubNavItem = ({ categ, category }) => {
  const [openList, setOpenList] = useState(true);
  const [list, setList] = useState(categ.subcategories.slice(0, 3));

  useEffect(() => {
    if (openList) {
      setList(categ.subcategories.slice(0, 3));
    } else {
      setList(categ.subcategories);
    }
  }, [openList]);
  return (
    <>
      <ul
        role="list"
        aria-labelledby={`${category.id}-${categ.slug}-heading`}
        className="mt-2"
      >
        {list.map((item) => (
          <Popover.Button as="Fragment">
            <li key={item.title} className="flex">
              <Link href={`/termekek/${categ.slug}/${item.slug}`}>
                <a className="hover:text-gray-800">{item.title}</a>
              </Link>
            </li>
          </Popover.Button>
        ))}
      </ul>
      {categ.subcategories.length > 3 ? (
        openList ? (
          <button
            onClick={() => setOpenList(false)}
            className="text-epgreen mt-1"
          >
            Több mutatása
          </button>
        ) : (
          <button
            onClick={() => setOpenList(true)}
            className="text-epgreen mt-1"
          >
            Bezárás
          </button>
        )
      ) : null}
    </>
  );
};
export default SubNavItem;
