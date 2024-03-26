import { CatalogItems } from 'components/CatalogItems/CatalogItems';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetItems } from '../redux/cars/cars.reduser';

const Cars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  return (
    <div>
      <CatalogItems />
    </div>
  );
};

export default Cars;
