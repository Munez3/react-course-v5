import { useState } from "react";

export function useFilteredCollection<T, K extends keyof T>(
  collection: T[],
  searchField: K
) {
  const [search, setSearch] = useState("");

  function filterCollection(collection: T[]) {
    if (!search) return collection;

    return collection.filter((item) => {
      const field = item[searchField];
      if (typeof field === "string") {
        return field.toLowerCase().includes(search.toLowerCase());
      }
    });
  }

  return {
    search,
    filteredCollection: filterCollection(collection),
    setSearch,
  };
}
