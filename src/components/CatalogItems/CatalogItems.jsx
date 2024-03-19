import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsList } from '../../redux/cars/cars.selectors';
import { fetchCars } from '../../redux/cars/operations';
import css from './CatalogItems.module.css';
import { Modal } from 'components/Modal/Modal';
import { selectIsOpenModal } from '../../redux/modal/modal.selectors';
import { openModal } from '../../redux/modal/modal.reduser';

export const CatalogItems = () => {
  const cars = useSelector(selectCarsList);
  const isOpenModal = useSelector(selectIsOpenModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <ul className={css.list}>
        {cars.map(
          ({
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
          }) => {
            const dataAdress = address.split(',');

            return (
              <li key={id} className={css.listItem}>
                <div>
                  <img src={img} alt={description} className={css.img} />
                  <div className={css.containerModel}>
                    <p>
                      {make} <span className={css.model}>{model}, </span>
                      <span>{year}</span>
                    </p>

                    <p>{rentalPrice}</p>
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
                      {rentalCompany}
                      <span className={css.yotaItem}>&Iota;</span>
                    </p>
                    <p>
                      {type}
                      <span className={css.yotaItem}>&Iota;</span>
                    </p>
                    <p>
                      {make}
                      <span className={css.yotaItem}>&Iota;</span>
                    </p>
                    <p>
                      {id}
                      <span className={css.yotaItem}>&Iota;</span>
                    </p>
                    <p>{accessories[0]}</p>
                  </div>
                  <button
                    type="button"
                    className={css.button}
                    onClick={() =>
                      dispatch(
                        openModal({
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
                        })
                      )
                    }
                  >
                    Learn More
                  </button>
                </div>
              </li>
            );
          }
        )}
      </ul>
      {isOpenModal && <Modal />}
    </div>
  );
};
