// lib/api.js
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🥣 وصفة عشوائية
export const getEgyptianRecipes= () => {
  return axios
    .get(`${BASE_URL}/filter.php?a=Egyptian`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error fetching random recipe:", err.message);
      throw err;
    });
};

// 🍽️ وصفة حسب ID
export const getRecipeById = (id) => {
  return axios
    .get(`${BASE_URL}/lookup.php?i=${id}`)
    .then((res) => res.data.meals?.[0])
    .catch((err) => {
      console.error("❌ Error fetching recipe by ID:", err.message);
      throw err;
    });
};

// 🧾 وصفات حسب التصنيف (category)
export const getRecipesByCategory = (category) => {
  return axios
    .get(`${BASE_URL}/filter.php?c=${category}`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error fetching recipes by category:", err.message);
      throw err;
    });
};

// 🔍 بحث بالاسم
export const searchRecipesByName = (name) => {
  return axios
    .get(`${BASE_URL}/search.php?s=${name}`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error searching recipes:", err.message);
      throw err;
    });
};

// 🍳 كل التصنيفات
export const getAllCategories = () => {
  return axios
    .get(`${BASE_URL}/categories.php`)
    .then((res) => res.data.categories)
    .catch((err) => {
      console.error("❌ Error fetching categories:", err.message);
      throw err;
    });
};
