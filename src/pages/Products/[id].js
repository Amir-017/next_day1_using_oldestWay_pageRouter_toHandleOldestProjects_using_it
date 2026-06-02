import ProductDetails from "@/Components/ProductDetails";

const InfoProduct = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default InfoProduct;

export async function getStaticPaths() {
    return {
    paths: [],
    fallback: "blocking",
  };
}



export async function getStaticProps(context) {

  const { id } = context.params;

  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const product = await response.json();

    if (!product || product.message === "Product not found") {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}