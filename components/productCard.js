import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const { id, title, price, description, pictureUrl } = product;
  return (
    <div className="border my-6 w-80 shadow hover:shadow-xl">
      <Link href={`singleProduct/${id}`}>
        <Image src={pictureUrl} alt="" width={320} height={240} />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-lg font-bold">{title}</h2>
          <span className="font-bold">${price}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
