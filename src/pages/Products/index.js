// pages/products/index.js

import ProductsList from "../../Components/ProductList";

export default function Products({ products }) {
  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-bold mb-5">
        Products
      </h1>

      <ProductsList products={products} />

    </div>
  );
}

export async function getStaticProps() {

  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
}