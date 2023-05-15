//  Fetch products on the client side (in useEffect)
// directly from an external API(CMS)
import { getProducts } from "@component/lib/helper";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
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
