import { autocomplete } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { render } from "react-dom";
import "@algolia/autocomplete-theme-classic";

export function Autocomplete(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,

      renderer: { createElement, Fragment, render },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return (
    <div
      className="relative z-0 flex-1 px-2 flex items-center justify-center "
      ref={containerRef}
    />
  );
}
