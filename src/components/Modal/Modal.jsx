import { useSelector } from 'react-redux';
import { itemId } from '../../redux/cars/cars.selectors';

export const Modal = () => {
  const carIdData = useSelector(itemId);
};
