import { TUser } from "@/typescript/common.types";

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

export const saveUsers = (users: TUser[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const setCurrentUser = (user: TUser) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser") || "{}");
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};