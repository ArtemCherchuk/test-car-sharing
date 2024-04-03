import css from './FormSearch.module.css';
import { makes } from 'helpers/makes';
import { useDispatch } from 'react-redux';
import { filterValue } from '../../redux/cars/cars.reduser';

export const FormSearch = ({ setIsFiltered }) => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget[0].value;
    dispatch(filterValue(value));
    setIsFiltered(true);
  };

  const onResetSearch = e => {
    e.currentTarget.parentElement[0].value = 'Enter the text';
    dispatch(filterValue(''));
    setIsFiltered(false);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <select name="makes">
        <option value="Enter the text" hidden>
          Enter the text
        </option>
        {makes.map(item => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
      <button type="button" onClick={onResetSearch}>
        Reset
      </button>
      <button type="submit">Search</button>
    </form>
  );
};
