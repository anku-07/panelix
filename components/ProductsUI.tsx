"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import productsApi from "../api/products.api";
import { IProduct } from "@/typescript/interfaces/CustomAllInterface";

const ProductsUI = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await productsApi.getAllProducts();

      setProducts(data?.products || []);
    };

    fetchData();
  }, []);

  console.log("all Product fetch", products);

  return (
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
  );
};

export default ProductsUI;
