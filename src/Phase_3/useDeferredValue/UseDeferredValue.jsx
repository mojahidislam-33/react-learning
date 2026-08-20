import { useDeferredValue, useMemo, useState } from "react";

function UseDeferredValue() {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const products = [
    "iPhone",
    "Samsung Galaxy",
    "Google Pixel",
    "OnePlus",
    "Xiaomi",
    "MacBook",
    "Dell Laptop",
    "HP Laptop",
    "Lenovo Laptop",
    "Asus Laptop",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product
        .toLowerCase()
        .includes(deferredSearch.toLowerCase())
    );
  }, [deferredSearch]);

  return (
    <div>
      <h2>useDeferredValue Example</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Search: {search}</p>

      <p>Deferred Search: {deferredSearch}</p>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product}>
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseDeferredValue;