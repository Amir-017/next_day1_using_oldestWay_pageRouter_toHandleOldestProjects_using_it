
import Image from "next/image";
import Link from "next/link";


export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

      {products.map((product) => (
       <div className="border rounded-lg p-4 shadow">

      <Image
      width={90}
      height={90}
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="font-bold mt-3">
        {product.title}
      </h2>

      <p className="text-gray-500">
        ${product.price}
      </p>

      <Link
        href={`/Products/${product.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-3"
      >
        Details
      </Link>

    </div>
      ))}

    </div>
  );
}