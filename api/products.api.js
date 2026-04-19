import axiosInstance from "../utils/axiosInstance";

const getAllProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res;
  } catch (error) {
    console.log("Get all error fetching users", error);
  }
};

export default getAllProducts;
