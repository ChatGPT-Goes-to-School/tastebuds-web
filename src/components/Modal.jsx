import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import SearchBar from './Searchbar';
import { createMealPlan, updateMealPlan } from '../utils/mealplan';
import { searchRecipe } from '../utils/meal';
import Recipe from './Recipe';
import dayjs from 'dayjs';

const Modals = ({ type, meal, updateMeal }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (val) => {
    setRecipes(await searchRecipe(val));
  };

  const selectRecipe = async (recipe) => {
    if (meal.ID != 0) {
      try {
        if (type === 'Breakfast') {
          if (meal.breakfast) {
            meal.breakfast += `,${recipe.id}`;
          } else {
            meal.breakfast = recipe.id;
          }
        } else if (type === 'Lunch') {
          if (meal.lunch) {
            meal.lunch += `,${recipe.id}`;
          } else {
            meal.lunch = recipe.id;
          }
        } else if (type === 'Dinner') {
          if (meal.dinner) {
            meal.dinner += `,${recipe.id}`;
          } else {
            meal.dinner = recipe.id;
          }
        } else if (type === 'Snack') {
          if (meal.snack) {
            meal.snack += `,${recipe.id}`;
          } else {
            meal.snack = recipe.id;
          }
        }

        const updatedMealPlan = await updateMealPlan(meal.ID, {
          breakfast: meal.breakfast,
          lunch: meal.lunch,
          dinner: meal.dinner,
          snack: meal.snack,
        });
        updateMeal(updatedMealPlan);
        messageApi.open({
          type: 'success',
          content: 'Meal plan updated',
        });

        handleOk();
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: 'Error updating meal plan',
        });
      }
    } else {
      try {
        let mealPlan = {
          Name: 'Hi',
          Description: 'Stuff happens',
          Duration: 4,
          breakfast: '',
          lunch: '',
          dinner: '',
          snack: '',
          Username: 'franky',
          date: dayjs().format('YYYY-MM-DDTHH:mm:ss.007').toString() + 'Z',
          //2023-07-18 16:00:00.007
        };
        if (type === 'Breakfast') mealPlan.breakfast = recipe.id;
        else if (type === 'Lunch') mealPlan.lunch = recipe.id;
        else if (type === 'Dinner') mealPlan.dinner = recipe.id;
        else if (type === 'Snack') mealPlan.snack = recipe.id;

        const created = await createMealPlan(mealPlan);
        messageApi.open({
          type: 'success',
          content: 'Meal plan created',
        });
        updateMeal(created);
        handleOk();
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: 'Error creating meal plan',
        });
      }
    }
  };

  return (
    <>
      <Button type="dashed" className="mt-4 mb-4" onClick={showModal}>
        Add a Meal
      </Button>
      <Modal title={type} open={open} onOk={handleOk} onCancel={handleCancel}>
        <SearchBar submitFn={handleSubmit} />
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <Recipe key={index} meal={recipe} />
              <Button onClick={() => selectRecipe(recipe)}>Select</Button>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
export default Modals;
