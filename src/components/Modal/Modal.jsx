import { useDispatch, useSelector } from 'react-redux';
import css from './Modal.module.css';
import { selectModalData } from '../../redux/modal/modal.selectors';
import { closeModal } from '../../redux/modal/modal.reduser';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

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
    address,
    rentalConditions,
    mileage,
  } = data;
  const dataAdress = address.split(',');
  const rental = rentalConditions.split('\n');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <div className={css.backdrop} onClick={handleOverayClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={() => dispatch(closeModal())}>
          <IoMdClose />
        </button>

        <div className={css.infoContainer}>
          <img src={img} alt={description} className={css.img} />
          <div>
            <p className={css.makeText}>
              {make} <span className={css.model}>{model}, </span>
              <span>{year}</span>
            </p>
          </div>
          <div className={css.containerDescription}>
            <p>
              {dataAdress[1]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              {dataAdress[2]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              Id: {id}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              Year: {year}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              Type: {type}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              Fuel Consumption: {fuelConsumption}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>Engine Size: {engineSize}</p>
          </div>

          <p className={css.descText}>{description}</p>

          <h3 className={css.secondaryTitle}>
            Accessories and functionalities:
          </h3>
          <div className={css.containerAcces}>
            <p>
              {accessories[0]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              {accessories[1]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              {accessories[2]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              {functionalities[0]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>
              {functionalities[1]}
              <span className={css.yotaItem}>&Iota;</span>
            </p>
            <p>{functionalities[2]}</p>
          </div>

          <div>
            <h3 className={css.secondaryTitle}>Rental Conditions: </h3>
            <ul className={css.list}>
              <li className={css.itemList}>
                Minimum age:{' '}
                <span className={css.accent}>{rental[0].slice(-3)}</span>
              </li>
              <li className={css.itemList}>{rental[1]}</li>
              <li className={css.itemList}>{rental[2]}</li>
              <li className={css.itemList}>
                Mileage: <span className={css.accent}>{mileage}</span>
              </li>
              <li className={css.itemList}>
                Price: <span className={css.accent}>{rentalPrice}</span>
              </li>
            </ul>
          </div>
          <a href="tel:+380730000000" className={css.button}>
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
};
