import { useEffect, useState } from "react";
import productsApi from "../api/products.api";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productsApi.getAllProducts();
        setProducts(data?.products || []);
      } catch (error) {
        setError("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useProduct;
