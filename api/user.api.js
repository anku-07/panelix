import axiosInstance from "../utils/axiosInstance";

const getAllUser = async () => {
    try {
        const res = await axiosInstance.get("https://dummyjson.com/users")
        return res.data;
    } catch (error) {
        console.log("Error fetching users",error);
    }
}

export default {getAllUser}