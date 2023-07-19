import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_RECIPE_URL, // Replace with your API's base URL
});

const searchRecipe = async (query) => {
  const response = await instance.get(`recipe/search?keyword=${query}`);
  return response.data;
};

const getRecipeById = async (id) => {
  const response = await instance.get(`/recipe?id=${id}`);
  return response.data;
};

export { searchRecipe, getRecipeById };
