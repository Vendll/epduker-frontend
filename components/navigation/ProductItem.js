import React, { createElement } from "react";

export function ProductItem({ hit, components }) {
  return (
    <a href={hit.url} className="aa-ItemLink relative z-50">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
}
