import dayjs from 'dayjs';
import Meal from './Meal';
import { DatePicker, Progress } from 'antd';
import { useState, useEffect } from 'react';
import { getMealPlanByUsernameAndDate } from '../utils/mealplan';
import { getRecipeById, searchRecipe } from '../utils/meal';

const Featured = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [todayMeals, setTodayMeals] = useState({}); // [breakfast, lunch, dinner, snack]
  const [todayPlan, setTodayPlan] = useState({});
  const [chosenMeals, setChosenMeals] = useState({}); // [breakfast, lunch, dinner, snack]
  const [chosenPlan, setChosenPlan] = useState({});

  const getChosenPlan = async (name, date) => {
    const plan = await getMealPlanByUsernameAndDate(name, date);
    setChosenPlan(plan);
  };

  useEffect(() => {
    getChosenPlan('franky', currentDate.format('YYYY-MM-DD'));
  }, [currentDate]);

  const getTodayPlan = async (name, date) => {
    const plan = await getMealPlanByUsernameAndDate(name, date);
    setTodayPlan(plan);
  };

  useEffect(() => {
    getChosenPlan('franky', currentDate.format('YYYY-MM-DD'));

    getTodayPlan('franky', dayjs().format('YYYY-MM-DD'));
  }, []);

  const extractMeal = async (meals, arr) => {
    if (typeof meals !== 'string') return [];
    const mealIds = meals.split(',');
    for (let i = 0; i < mealIds.length; i++) {
      const recipe = await getRecipeById(mealIds[i]);
      arr.push(recipe);
    }
    return arr;
  };

  const initChosenPlan = async () => {
    let breakfast = [];
    let lunch = [];
    let dinner = [];
    let snack = [];

    if (chosenPlan.breakfast) {
      breakfast = await extractMeal(chosenPlan.breakfast, breakfast);
    }
    if (chosenPlan.lunch) {
      lunch = await extractMeal(chosenPlan.lunch, lunch);
    }
    if (chosenPlan.dinner) {
      dinner = await extractMeal(chosenPlan.dinner, dinner);
    }
    if (chosenPlan.snack) {
      snack = await extractMeal(chosenPlan.snack, snack);
    }
    setChosenMeals({ breakfast, lunch, dinner, snack });
  };

  useEffect(() => {
    initChosenPlan();
  }, [chosenPlan]);

  const initTodayPlan = async () => {
    let breakfast = [];
    let lunch = [];
    let dinner = [];
    let snack = [];
    if (todayPlan.breakfast) {
      breakfast = await extractMeal(todayPlan.breakfast, breakfast);
    }
    if (todayPlan.lunch) {
      lunch = await extractMeal(todayPlan.lunch, lunch);
    }
    if (todayPlan.dinner) {
      dinner = await extractMeal(todayPlan.dinner, dinner);
    }
    if (todayPlan.snack) {
      snack = await extractMeal(todayPlan.snack, snack);
    }
    setTodayMeals({ breakfast, lunch, dinner, snack });
  };

  useEffect(() => {
    initTodayPlan();
  }, [todayPlan]);

  return (
    <div className="flex gap-4 ml-8 mr-8 h-full mb-8 overflow-auto">
      <div className="w-1/4 p-8 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl">Make your Day</p>
        <p className="text-grey">{dayjs().format('dddd, D MMMM YYYY')}</p>
        <div className="flex flex-col m-4">
          {Object.entries(todayMeals).map((id, meal) => {
            return (
              <Meal
                key={id}
                title={id[0].charAt(0).toUpperCase() + id[0].slice(1)}
                canAdd={true}
                meals={todayMeals}
                meal={todayPlan}
                updateMeal={setTodayPlan}
                canSelect={false}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Progress
            type="circle"
            percent={((150 * 4) / 1500) * 100}
            format={() => `${150 * 4} cal`}
          />
        </div>
      </div>
      <div className="w-3/4 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl pt-8 pl-8 pb-4">View your Mealplan</p>
        <DatePicker
          defaultValue={currentDate}
          format={'DD/MM/YYYY'}
          onChange={(date) => {
            if (date !== null) setCurrentDate(date);
          }}
          className="ml-8"
        />
        <div className="mt-8 flex items-center justify-evenly w-full">
          {Object.entries(chosenMeals).map((id, meal) => {
            return (
              <Meal
                key={id}
                title={id[0].charAt(0).toUpperCase() + id[0].slice(1)}
                canAdd={false}
                meals={chosenMeals}
                meal={chosenPlan}
                updateMeal={setChosenPlan}
                canSelect={false}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-8">
          <Progress
            type="circle"
            percent={((150 * 4) / 1500) * 100}
            format={() => `${150 * 4} cal`}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
