//  Fetch products on the client side (in useEffect)
// from an internal API route
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  console.log(products);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        {products.map((product) => {
          const { id, title, description, price } = product;
          return (
            <div key={id}>
              <h1> {title}</h1>
              <p>{price}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
