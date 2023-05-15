import Head from "next/head";
import Title from "./Title";
import Navbar from "./navbar";

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - Next Shop</title>
      </Head>
      <Navbar />
      <Title>{title}</Title>
      <main className="px-6 py-4">{children}</main>
    </>
  );
}

export default Page;
