// Fetch products on server side index-1a(in getStaticProps)
import { getProducts } from "@component/lib/helper";
import Head from "next/head";

export async function getStaticProps() {
  const products = await getProducts();
  console.log(products);
  return {
    props: { products },
  };
}

export default function HomePage({ products }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        {products.map((product) => {
          const { id, title, description, price } = product;
          return (
            <ul key={id}>
              <li>
                <h1>{title}</h1>
              </li>
              <li>
                <p>{price}</p>
              </li>
              <li>
                <p>{description}</p>
              </li>
            </ul>
          );
        })}
      </main>
    </>
  );
}
