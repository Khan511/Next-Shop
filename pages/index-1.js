// Fetch products on server side(in getStaticProps)
import Title from "@component/components/Title";
import Head from "next/head";

export async function getStaticProps() {
  const response = await fetch("http://localhost:1337/api/products");
  const products = await response.json();
  return {
    props: { products },
  };
}

export default function HomePage({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
      </main>
    </>
  );
}
