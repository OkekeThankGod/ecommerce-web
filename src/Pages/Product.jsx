import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../component/BreadCrums/Breadcrums';
import ProductDisplay from '../component/productDisplay/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../component/RelatedProduct/RelatedProduct';

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product by matching the id, handle data type consistency
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    // Optionally, you can show a fallback UI if the product isn't found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
}
