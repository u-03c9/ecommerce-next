import type { InferGetStaticPropsType } from "next";
import { Product } from "../framework/common/types/product";
import getAllProcuts from "../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products: Product[] = await getAllProcuts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default Home;
