
import Image from "next/image";

export default function ProductDetails({ product }) {

  return (
    <div className="container mx-auto p-6">

      <Image
      width={300}
      height={300}
        src={product.thumbnail}
        alt={product.title}
        className="w-full max-w-md rounded"
      />

      <h1 className="text-4xl font-bold mt-5">
        {product.title}
      </h1>

      <p className="mt-4">
        {product.description}
      </p>

      <h2 className="text-2xl font-bold mt-4">
        ${product.price}
      </h2>

    </div>
  );
}

