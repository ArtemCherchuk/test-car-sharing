import css from './CatalogItems.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsList, selectTotal } from '../../redux/cars/cars.selectors';
import { fetchCars } from '../../redux/cars/operations';
import { selectIsOpenModal } from '../../redux/modal/modal.selectors';
import { openModal } from '../../redux/modal/modal.reduser';

import { ButtonLoad } from 'components/ButtonLoad/ButtonLoad';
import { Modal } from 'components/Modal/Modal';

export const CatalogItems = () => {
  const cars = useSelector(selectCarsList);
  const total = useSelector(selectTotal);
  const isOpenModal = useSelector(selectIsOpenModal);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const onClickLoadMore = () => {};

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
      <ButtonLoad onClickLoadMore={onClickLoadMore} />
      {isOpenModal && <Modal />}
    </div>
  );
};
