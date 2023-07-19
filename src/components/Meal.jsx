import { Button, Image } from 'antd';
import Modal from './Modal';
import Recipe from './Recipe';

const Meal = ({ title, canAdd, meals, updateMeal }) => {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      {meals.map((meal, index) => (
        <Recipe key={index} meal={meal} />
      ))}
      {canAdd && <Modal type={title} meal={meals} updateMeal={updateMeal} />}
      {canSelect && <Button type="dashed">Select</Button>}
    </div>
  );
};

export default Meal;
