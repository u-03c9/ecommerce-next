import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product, ProductImage } from "@common/types/product";

export const normalizeProductImages = ({
  edges,
}: {
  edges: Array<ImageEdge>;
}): Array<ProductImage> =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    rest,
  }));

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    images: imageConnection,
    description,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/, ""),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };

  return product;
};
