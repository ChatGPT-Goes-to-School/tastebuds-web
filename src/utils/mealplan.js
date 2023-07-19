import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_MEALPLAN_URL, // Replace with your API's base URL
});

const getMealPlanById = async (id) => {
  const response = await instance.get(`/meal-plans/${id}`);
  return response.data;
};

const getMealPlanByUsername = async (username) => {
  const response = await instance.get(`/meal-plans/username/${username}`);
  return response.data;
};

const getMealPlanByUsernameAndDate = async (username, date) => {
  const response = await instance.get(
    `/meal-plans/username/${username}/datePlan/${date}`
  );
  return response.data;
};

const createMealPlan = async (mealPlan) => {
  const response = await instance.post('/meal-plans', mealPlan);
  return response.data;
};

const updateMealPlan = async (id, mealPlan) => {
  const response = await instance.put(`/meal-plans/${id}`, mealPlan);
  return response.data;
};

const deleteMealPlan = async (id) => {
  const response = await instance.delete(`/meal-plans/${id}`);
  return response.data;
};

export {
  getMealPlanById,
  getMealPlanByUsername,
  getMealPlanByUsernameAndDate,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
};
