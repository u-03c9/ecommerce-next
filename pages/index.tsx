import type { InferGetStaticPropsType } from "next";
import { Product } from "@common/types/product";
import getAllProcuts from "@framework/products/get-all-products";
import { getConfig } from "@framework/api/config";

export async function getStaticProps() {
  const config = getConfig();
  const products: Product[] = await getAllProcuts(config);

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
