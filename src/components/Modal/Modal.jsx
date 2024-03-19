import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import { selectModalData } from '../../redux/modal/modal.selectors';
import { closeModal } from '../../redux/modal/modal.reduser';

export const Modal = () => {
  const data = useSelector(selectModalData);

  const dispatch = useDispatch();
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = data;
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={() => dispatch(closeModal())}>
          ❌
        </button>

        <div className={css.infoContact}>
          <h2 className={css.title}>{id}</h2>
          <h2 className={css.title}>{year}</h2>
          <h2 className={css.title}>{make}</h2>
          <h2 className={css.title}>{model}</h2>
          <h2 className={css.title}>{type}</h2>
          <h2 className={css.title}>{engineSize}</h2>
          <h2 className={css.title}>{mileage}</h2>
          <h2 className={css.title}>{address}</h2>
          <h2 className={css.title}>{img}</h2>
        </div>
      </div>
    </div>
  );
};
