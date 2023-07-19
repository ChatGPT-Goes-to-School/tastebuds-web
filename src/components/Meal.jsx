import { Button, Image } from 'antd';
import Modal from './Modal';
import Recipe from './Recipe';
import { useEffect, useState } from 'react';

const Meal = ({ title, canAdd, meals, updateMeal, canSelect, meal }) => {
  const [mealPlan, setMealPlan] = useState([]);
  useEffect(() => {
    let plan = meals[title.toLowerCase()];
    if (plan === undefined) {
      plan = [];
    } else if (typeof plan === 'string') {
      plan = plan.split(',');
    }
    setMealPlan(plan);
  }, [meals]);

  return (
    <div className="flex flex-col">
      <p>{title}</p>
      {mealPlan.map((m, index) => {
        return <Recipe key={index} meal={m} />;
      })}
      {canAdd && <Modal type={title} meal={meal} updateMeal={updateMeal} />}
      {canSelect && <Button type="dashed">Select</Button>}
    </div>
  );
};

export default Meal;
