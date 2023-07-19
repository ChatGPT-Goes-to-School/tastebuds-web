import { Image } from 'antd';

const Recipe = ({ index, meal }) => {
  return (
    <div key={index} className="flex gap-4">
      <Image src={meal.image} width={80} />
      <p>{meal.name}</p>
      <p>{meal.calories} cal</p>
    </div>
  );
};

export default Recipe;
