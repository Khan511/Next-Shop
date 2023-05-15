import { getProducts } from "@component/lib/helper";

async function handler(req, res) {
  console.log(`[handler] handler`);
  const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
