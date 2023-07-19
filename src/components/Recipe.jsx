import { Image } from 'antd';

const Recipe = ({ index, meal }) => {
  return (
    <div key={index} className="flex gap-4 items-center justify-center">
      <Image src={meal.image} width={80} />
      <p>{meal.title}</p>
      <p>{meal.calories ? meal.calories : 100} cal</p>
    </div>
  );
};

export default Recipe;
