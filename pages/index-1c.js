// Fetch products on server side index-1b(in getServerSideProps)
import { getProducts } from "@component/lib/helper";
import Head from "next/head";

export async function getServerSideProps() {
  console.log(`[Server Side Props] getServerSideProps()`);
  const products = await getProducts();

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
