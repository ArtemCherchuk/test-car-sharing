import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonLoad } from 'components/ButtonLoad/ButtonLoad';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { CatalogItems } from 'components/CatalogItems/CatalogItems';

import { fetchCars, fetchCarsAll } from '../redux/cars/operations';
import { resetItems } from '../redux/cars/cars.reduser';
import {
  selectCarsList,
  selectVisibleItems,
} from '../redux/cars/cars.selectors';

const Cars = () => {
  const dispatch = useDispatch();

  const carsFiltered = useSelector(selectVisibleItems);
  const carsPage = useSelector(selectCarsList);

  const [isFiltered, setIsFiltered] = useState(false);
  const [page, setPage] = useState(1);

  const cars = isFiltered ? carsFiltered : carsPage;

  useEffect(() => {
    dispatch(resetItems());
    setIsFiltered(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCarsAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <FormSearch setIsFiltered={setIsFiltered} />
      <CatalogItems data={cars} />
      {(cars.length / 12) % 1 === 0 && (
        <ButtonLoad onClickLoadMore={onClickLoadMore} />
      )}
    </div>
  );
};

export default Cars;
