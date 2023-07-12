import { Button, Image } from 'antd';
import { useState } from 'react';

const Meal = ({ title }) => {
  const [meals, setMeals] = useState([
    {
      name: 'Egg',
      calories: 100,
      image:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg',
    },
  ]);
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      {meals.map((meal, index) => (
        <div key={index} className="flex gap-4">
          <Image src={meal.image} width={80} />
          <p>{meal.name}</p>
          <p>{meal.calories} cal</p>
        </div>
      ))}
      <Button type="dashed" className="mt-4 mb-4">
        Add a Meal
      </Button>
    </div>
  );
};

export default Meal;
