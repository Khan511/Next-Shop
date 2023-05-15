// Fetch Single Product dynamically on server side (in getStaticPaths and getStaticProps)

import { ApiError, getProducts, getSingleProduct } from "@component/lib/helper";
import Link from "next/link";
import Image from "next/image";
import Page from "@component/components/page";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getSingleProduct(id);
    return {
      props: { product },
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}
const ProductPage = ({ product }) => {
  const { title, description, pictureUrl, price } = product;
  return (
    <Page title="Plants Details">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <Image src={pictureUrl} alt="" width={640} height={480} />
        <p>{description}</p>
      </div>
      <p className="font-bold ">${price}</p>
    </Page>
  );
};

export default ProductPage;
