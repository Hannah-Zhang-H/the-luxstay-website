"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  // useSearchParams() is a Client Component hook that lets you read the current URL's search parameters.
  const searchParams = useSearchParams();
  // useRouter() hook allows you to programmatically change routes inside Client Component.
  const router = useRouter();
  // usePathname() is a Client Component hook that lets you read the current URL's pathname.
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter={"all"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All villas
      </Button>

      <Button
        filter={"small"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        filter={"medium"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter={"large"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      } `}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
