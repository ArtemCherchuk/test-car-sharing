import css from './FormSearch.module.css';
import { makes } from 'helpers/makes';
import { useDispatch } from 'react-redux';
import { filterValue } from '../../redux/cars/cars.reduser';

export const FormSearch = ({ setIsFiltered }) => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget[0].value;
    if (value === 'Enter the text') {
      alert('Please select car brand');
      return;
    }
    dispatch(filterValue(value));
    setIsFiltered(true);
  };

  const onResetSearch = e => {
    e.currentTarget.parentElement.parentElement[0].value = 'Enter the text';
    dispatch(filterValue(''));
    setIsFiltered(false);
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <div className={css.selectContainer}>
        <label className={css.label}>Car brand</label>
        <select name="makes" className={css.select}>
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
      </div>
      <div className={css.buttonContainer}>
        <button type="button" onClick={onResetSearch} className={css.button}>
          Reset
        </button>
        <button type="submit" className={css.button}>
          Search
        </button>
      </div>
    </form>
  );
};
