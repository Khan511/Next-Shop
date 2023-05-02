//  import { Inter } from "next/font/google";
import Title from "@component/components/Title";
import Head from "next/head";
 

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <p className="px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          distinctio laudantium facere cum maiores, magni repellat, ipsum
          eligendi sint accusantium fugiat et vitae in officia! Dolorum pariatur
          ipsam omnis labore nulla eum dolor esse architecto dolore fugit hic
          id, ea nam. Ut non cumque veritatis! Placeat fugiat quo minus laborum.
        </p>
      </main>
    </>
  );
}
