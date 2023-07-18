import dayjs from 'dayjs';
import Meal from './Meal';
import { DatePicker, Progress } from 'antd';
import { useState, useEffect } from 'react';
import { getMealPlanByUsernameAndDate } from '../utils/mealplan';
import { getRecipeById, searchRecipe } from '../utils/meal';

const Featured = () => {
  const [meals, setMeals] = useState([
    {
      name: 'Egg',
      calories: 100,
      image:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg',
    },
  ]);

  const [currentDate, setCurrentDate] = useState(dayjs());
  const [todayMeals, setTodayMeals] = useState({}); // [breakfast, lunch, dinner, snack]
  const [todayPlan, setTodayPlan] = useState({});
  const [chosenMeals, setChosenMeals] = useState({}); // [breakfast, lunch, dinner, snack]
  const [chosenPlan, setChosenPlan] = useState({});

  const getChosenPlan = async (name, date) => {
    setChosenPlan(await getMealPlanByUsernameAndDate(name, date));
  };

  useEffect(() => {
    getChosenPlan('franky', currentDate.format('YYYY-MM-DD'));
  }, [currentDate]);

  const getTodayPlan = async (name, date) => {
    setTodayPlan(await getMealPlanByUsernameAndDate(name, date));
  };

  useEffect(() => {
    getTodayPlan('franky', dayjs().format('YYYY-MM-DD'));
  }, []);

  const extractMeal = async (meals, arr) => {
    const mealIds = meals.split(',');
    for (let i = 0; i < mealIds.length; i++) {
      const recipe = await getRecipeById(mealIds[i]);
      arr.push(recipe);
    }
  };

  useEffect(() => {
    let breakfast = [];
    let lunch = [];
    let dinner = [];
    let snack = [];

    if (chosenPlan.Breakfast) {
      extractMeal(chosenPlan.Breakfast, breakfast);
    }
    if (chosenPlan.Lunch) {
      extractMeal(chosenPlan.Lunch, lunch);
    }
    if (chosenPlan.Dinner) {
      extractMeal(chosenPlan.Dinner, dinner);
    }
    if (chosenPlan.Snack) {
      extractMeal(chosenPlan.Snack, snack);
    }
    setChosenMeals({ breakfast, lunch, dinner, snack });
  }, [chosenPlan]);

  useEffect(() => {
    let breakfast = [];
    let lunch = [];
    let dinner = [];
    let snack = [];

    if (todayPlan.Breakfast) {
      extractMeal(todayPlan.Breakfast, breakfast);
    }
    if (todayPlan.Lunch) {
      extractMeal(todayPlan.Lunch, lunch);
    }
    if (todayPlan.Dinner) {
      extractMeal(todayPlan.Dinner, dinner);
    }
    if (todayPlan.Snack) {
      extractMeal(todayPlan.Snack, snack);
    }
    setTodayMeals({ breakfast, lunch, dinner, snack });
  }, [todayPlan]);

  return (
    <div className="flex gap-4 ml-8 mr-8 h-full mb-8 overflow-auto">
      <div className="w-1/4 p-8 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl">Make your Day</p>
        <p className="text-grey">{dayjs().format('dddd, D MMMM YYYY')}</p>
        <div className="flex flex-col m-4">
          {Object.entries(todayMeals).map(([id, meal]) => (
            <Meal
              key={id}
              title={id.charAt(0).toUpperCase() + id.substring(1)}
              canAdd={true}
              meals={meal}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Progress
            type="circle"
            percent={((meals[0].calories * 4) / 1500) * 100}
            format={() => `${meals[0].calories * 4} cal`}
          />
        </div>
      </div>
      <div className="w-3/4 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl pt-8 pl-8 pb-4">View your Mealplan</p>
        <DatePicker
          defaultValue={currentDate}
          format={'DD/MM/YYYY'}
          onChange={(date) => setCurrentDate(date)}
          className="ml-8"
        />
        <div className="mt-8 flex items-center justify-evenly w-full">
          {Object.entries(chosenMeals).map(([id, meal]) => (
            <Meal
              key={id}
              title={id.charAt(0).toUpperCase() + id.substring(1)}
              canAdd={false}
              meals={meal}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Progress
            type="circle"
            percent={((meals[0].calories * 4) / 1500) * 100}
            format={() => `${meals[0].calories * 4} cal`}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
