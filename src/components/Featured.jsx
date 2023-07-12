import dayjs from 'dayjs';
import Meal from './Meal';
import { DatePicker, Progress } from 'antd';
import { useState } from 'react';

const Featured = () => {
  const [meals, setMeals] = useState([
    {
      name: 'Egg',
      calories: 100,
      image:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg',
    },
  ]);

  return (
    <div className="flex gap-4 ml-8 mr-8 h-full mb-8 overflow-auto">
      <div className="w-1/4 p-8 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl">Make your Day</p>
        <p className="text-grey">{dayjs().format('dddd, D MMMM YYYY')}</p>
        <div className="flex flex-col m-4">
          <Meal title="Breakfast" canAdd={true} meals={meals} />
          <Meal title="Lunch" canAdd={true} meals={meals} />
          <Meal title="Dinner" canAdd={true} meals={meals} />
          <Meal title="Snack" canAdd={true} meals={meals} />
        </div>
        <div className="flex items-center justify-center">
          <Progress
            type="circle"
            percent={((meals[0].calories * 4) / 1500) * 100}
            format={() => `${meals[0].calories * 4} cal`}
          />
        </div>
      </div>
      <div className="w-3/4 bg-white rounded-lg h-full">
        <p className="text-3xl pt-8 pl-8 pb-4">View your Mealplan</p>
        <DatePicker
          defaultValue={dayjs()}
          format={'DD/MM/YYYY'}
          className="ml-8"
        />
        <div className="mt-8 flex items-center justify-evenly w-full">
          <Meal title="Breakfast" canAdd={false} meals={meals} />
          <Meal title="Lunch" canAdd={false} meals={meals} />
          <Meal title="Dinner" canAdd={false} meals={meals} />
          <Meal title="Snack" canAdd={false} meals={meals} />
        </div>
        <div className="flex items-center justify-center mt-32">
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
