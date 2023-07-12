import { Button, Image } from 'antd';

const Meal = ({ title, canAdd, meals }) => {
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
      {canAdd && (
        <Button type="dashed" className="mt-4 mb-4">
          Add a Meal
        </Button>
      )}
    </div>
  );
};

export default Meal;
