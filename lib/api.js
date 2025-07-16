// lib/api.js
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// 🥣 وصفة عشوائية
export const getEgyptianRecipes = () => {
  return axios
    .get(`${BASE_URL}/filter.php?a=Egyptian`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error fetching random recipe:", err.message);
      throw err;
    });
};

// وصقة حسب الموقع
export const getRecipeByLocation = (location) => {
  return axios
    .get(`${BASE_URL}/filter.php?a=${location}`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error fetching recipe by location:", err.message);
      throw err;
    });
};

// كل المناطق
export const getAllLocations = () => {
  return axios
    .get(`${BASE_URL}/list.php?a=list`)
    .then((res) => res.data.meals)
    .catch((err) => {
      console.error("❌ Error fetching all locations:", err.message);
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

export const searchYoutube = (query) => {
  if (!query || !query.trim()) {
    throw new Error("❌ يجب إدخال كلمة بحث صحيحة");
  }

  return axios
    .get("https://youtube-search-and-download.p.rapidapi.com/search", {
      params: {
        query: query,
        hl: "en",
        gl: "US",
        features: "hd",
        type: "v",
        duration: "l",
        sort: "r",
      },
      headers: {
        "x-rapidapi-key": "0de8f6287amsh8067eea3546e92fp1bf827jsnf8cde74eaf77",
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error("❌ Error searching YouTube:", err.message);
      throw err;
    });
};
