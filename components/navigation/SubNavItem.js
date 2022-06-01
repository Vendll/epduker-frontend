import { useState, useEffect } from "react";
import Link from "next/link";

const SubNavItem = ({ column, category }) => {
  const [open, setOpen] = useState(true);
  const [list, setList] = useState(column.subcategories.slice(0, 3));

  useEffect(() => {
    if (open) {
      setList(column.subcategories.slice(0, 3));
      console.log(list);
    } else {
      setList(column.subcategories);
      console.log(list);
    }
  }, [open]);
  return (
    <>
      <ul
        role="list"
        aria-labelledby={`${category.id}-${column.slug}-heading`}
        className="mt-2"
      >
        {list.map((item) => (
          <li key={item.title} className="flex">
            <Link href={`termekek/${column.slug}/${item.slug}`}>
              <a className="hover:text-gray-800">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {column.subcategories.length > 3 ? (
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
