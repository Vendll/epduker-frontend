import { useState, useEffect } from "react";
import Link from "next/link";

const SubNavItem = ({ categ, category }) => {
  const [open, setOpen] = useState(true);
  const [list, setList] = useState(categ.subcategories.slice(0, 3));

  useEffect(() => {
    if (open) {
      setList(categ.subcategories.slice(0, 3));
      console.log(list);
    } else {
      setList(categ.subcategories);
      console.log(list);
    }
  }, [open]);
  return (
    <>
      <ul
        role="list"
        aria-labelledby={`${category.id}-${categ.slug}-heading`}
        className="mt-2"
      >
        {list.map((item) => (
          <li key={item.title} className="flex">
            <Link href={`/termekek/${categ.slug}/${item.slug}`}>
              <a className="hover:text-gray-800">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {categ.subcategories.length > 3 ? (
        open ? (
          <button onClick={() => setOpen(false)} className="text-epgreen mt-1">
            Több mutatása
          </button>
        ) : (
          <button onClick={() => setOpen(true)} className="text-epgreen mt-1">
            Bezárás
          </button>
        )
      ) : null}
    </>
  );
};
export default SubNavItem;
