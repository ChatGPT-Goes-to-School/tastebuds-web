import dayjs from 'dayjs';
import Meal from './Meal';

const Featured = () => {
  return (
    <div className="flex gap-4 ml-8 mr-8 h-full mb-8 overflow-auto">
      <div className="w-1/4 p-8 bg-white rounded-lg h-full overflow-auto">
        <p className="text-3xl">Make your Day</p>
        <p className="text-grey">{dayjs().format('dddd, D MMMM YYYY')}</p>
        <div className="flex flex-col m-4">
          <Meal title="Breakfast" />
          <Meal title="Lunch" />
          <Meal title="Dinner" />
          <Meal title="Snack" />
        </div>
      </div>
      <div className="w-3/4 bg-white rounded-lg h-full"></div>
    </div>
  );
};

export default Featured;
