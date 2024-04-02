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
  // const cars = useSelector(selectVisibleItems);
  const cars = useSelector(selectCarsList);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetItems());
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
      <FormSearch />
      <CatalogItems data={cars} />
      {(cars.length / 12) % 1 === 0 && (
        <ButtonLoad onClickLoadMore={onClickLoadMore} />
      )}
    </div>
  );
};

export default Cars;
