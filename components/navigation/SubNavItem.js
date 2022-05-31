import { useState } from "react";

const SubNavItem = (column, category) => {
  const [open, setOpen] = useState(false);
  return (
    <ul
      role="list"
      aria-labelledby={`${category.id}-${column.slug}-heading`}
      className="mt-2"
    >
      {column.column.subcategories.map((item) => (
        <li key={item.title} className="flex">
          <a href={item.slug} className="hover:text-gray-800">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SubNavItem;
