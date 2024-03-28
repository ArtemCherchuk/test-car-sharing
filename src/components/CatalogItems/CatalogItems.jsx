import css from './CatalogItems.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsList,
  selectFavoriteItems,
} from '../../redux/cars/cars.selectors';
import { fetchCars } from '../../redux/cars/operations';
import { selectIsOpenModal } from '../../redux/modal/modal.selectors';
import { openModal } from '../../redux/modal/modal.reduser';

import { ButtonLoad } from 'components/ButtonLoad/ButtonLoad';
import { Modal } from 'components/Modal/Modal';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { addFavorite } from '../../redux/cars/cars.reduser';
import { FaBullseye } from 'react-icons/fa';

export const CatalogItems = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCarsList);
  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteItems = useSelector(selectFavoriteItems);
  console.log(favoriteItems);

  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  const onClickFavorine = data => {
    setFavorite(true);
    dispatch(addFavorite(data));
  };

  const onClickNotFavorite = () => {
    setFavorite(false);
  };

  return (
    <div className={css.section}>
      <ul className={css.list}>
        {cars &&
          cars.map(
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
                  {!favorite ? (
                    <span className={css.containerFavorine}>
                      <button
                        type="button"
                        className={css.buttonFavorite}
                        onClick={() =>
                          onClickFavorine({
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
                        }
                      >
                        <MdFavoriteBorder className={css.iconFavorite} />
                      </button>
                    </span>
                  ) : (
                    <span className={css.containerFavorine}>
                      <button
                        type="button"
                        className={css.buttonFavorite}
                        onClick={onClickNotFavorite}
                      >
                        <MdOutlineFavorite className={css.iconFullFavorite} />
                      </button>
                    </span>
                  )}

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
      {(cars.length / 12) % 1 === 0 && (
        <ButtonLoad onClickLoadMore={onClickLoadMore} />
      )}

      {isOpenModal && <Modal />}
    </div>
  );
};
