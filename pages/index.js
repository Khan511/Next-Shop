// Fetch products on server side index.js(in getStaticProps)
import Navbar from "@component/components/navbar";
import Page from "@component/components/page";
import ProductCard from "@component/components/productCard";
import { getProducts } from "@component/lib/helper";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
export default function HomePage({ products }) {
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </Page>
  );
}
