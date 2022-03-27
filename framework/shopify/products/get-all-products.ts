import {
  fetchApi,
  normalizeProduct,
  getAllProductsQuery,
} from "../utils/index";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";

type ReturnType = {
  products: ProductConnection;
};

const getAllProcuts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return products;
};

export default getAllProcuts;
