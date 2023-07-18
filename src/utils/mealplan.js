import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_MEALPLAN_URL, // Replace with your API's base URL
});

const getMealPlanById = async (id) => {
  console.log('heelo', import.meta.env.MEALPLAN_URL);
  const response = await instance.get(`/mealplan/${id}`);
  return response.data;
};

const getMealPlanByUsername = async (username) => {
  const response = await instance.get(`/mealplan/username/${username}`);
  return response.data;
};

const getMealPlanByUsernameAndDate = async (username, date) => {
  const response = await instance.get(
    `/mealplan/username/${username}/datePlan/${date}`
  );
  return response.data;
};

const createMealPlan = async (mealPlan) => {
  const response = await instance.post('/mealplan', mealPlan);
  return response.data;
};

const updateMealPlan = async (id, mealPlan) => {
  const response = await instance.put(`/mealplan/${id}`, mealPlan);
  return response.data;
};

const deleteMealPlan = async (id) => {
  const response = await instance.delete(`/mealplan/${id}`);
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
