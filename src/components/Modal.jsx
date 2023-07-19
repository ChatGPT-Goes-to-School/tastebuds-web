import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import SearchBar from './Searchbar';
import { createMealPlan, updateMealPlan } from '../utils/mealplan';
import { searchRecipe } from '../utils/meal';
import Recipe from './Recipe';
import { Dayjs } from 'dayjs';

const Modal = ({ type, meal, updateMeal }) => {
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
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleSubmit = async (val) => {
    setRecipes(await searchRecipe(val));
  };

  const selectRecipe = async (recipe) => {
    if (meal.id) {
      try {
        if (type === 'Breakfast') {
          if (meal.Breakfast) {
            meal.Breakfast += `,${recipe.id}`;
          } else {
            meal.Breakfast = recipe.id;
          }
        } else if (type === 'Lunch') {
          if (meal.Lunch) {
            meal.Lunch += `,${recipe.id}`;
          } else {
            meal.Lunch = recipe.id;
          }
        } else if (type === 'Dinner') {
          if (meal.Dinner) {
            meal.Dinner += `,${recipe.id}`;
          } else {
            meal.Dinner = recipe.id;
          }
        } else if (type === 'Snack') {
          if (meal.Snack) {
            meal.Snack += `,${recipe.id}`;
          } else {
            meal.Snack = recipe.id;
          }
        }

        const updatedMealPlan = await updateMealPlan(meal.id, recipe);
        updateMeal(updatedMealPlan);
        messageApi.open({
          type: 'success',
          content: 'Meal plan updated',
        });
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
          Breakfast: '',
          Lunch: '',
          Dinner: '',
          Snack: '',
          Username: 'franky',
          Date: Dayjs().format('YYYY-MM-DD'),
        };
        if (type === 'Breakfast') mealPlan.Breakfast = recipe.id;
        else if (type === 'Lunch') mealPlan.Lunch = recipe.id;
        else if (type === 'Dinner') mealPlan.Dinner = recipe.id;
        else if (type === 'Snack') mealPlan.Snack = recipe.id;

        const created = await createMealPlan(mealPlan);
        updateMeal(created);
        messageApi.open({
          type: 'success',
          content: 'Meal plan created',
        });
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
        {recipes.map((recipe, index) => (
          <div className="flex items-center justify-center">
            <Recipe key={index} meal={recipe} />
            <Button title="Select" onClick={() => selectRecipe(recipe)} />
          </div>
        ))}
      </Modal>
    </>
  );
};
export default Modal;
