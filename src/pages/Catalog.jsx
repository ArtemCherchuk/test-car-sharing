import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/operations';
import { carsList } from '../redux/cars/cars.selectors';

const Cars = () => {
  const cars = useSelector(carsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);

  return <div>Catalog</div>;
};

export default Cars;
