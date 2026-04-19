"use client";

import ProductCard from "./ProductCard/ProductCard";
// import productsApi from "../api/products.api";
// import { IProduct } from "@/typescript/interfaces/CustomAllInterface";
import CommonInput from "@/ui/CommonInput/CommonInput";

import useProduct from "@/hooks/useProduct";
import { IProduct } from "@/typescript/interfaces/CustomAllInterface";

const ProductsUI = () => {
  const { products, loading, error } = useProduct();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="mb-4">
        <div>
          <CommonInput placeholder="Search Product" />
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item: IProduct) => (
          <ProductCard
            key={item.id}
            id={item.id}
            imageUrl={item.images?.[0] || "/fallback.png"}
            category={item.category}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsUI;
