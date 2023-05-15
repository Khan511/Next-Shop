const { CMS_URL } = process.env;

// const CMS_URL = "http://localhost:1337";
export class ApiError extends Error {
  constructor(url, status) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
    this.status = status;
  }
}

export async function fetchJSON(url, option) {
  const response = await fetch(url, option);
  if (!response.ok) {
    throw new ApiError(url, response.status);
  }
  return await response.json();
}

export async function getSingleProduct(id) {
  const product = await fetchJSON(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts() {
  const products = await fetchJSON(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

function stripProduct(product) {
  console.log(product);
  return {
    id: product.id,
    price: product.price,
    title: product.title,
    description: product.description,
    pictureUrl: CMS_URL + product.picture.url,
  };
}
