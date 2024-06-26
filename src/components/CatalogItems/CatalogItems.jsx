import css from './CatalogItems.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/cars/cars.selectors';

import { selectIsOpenModal } from '../../redux/modal/modal.selectors';
import { openModal } from '../../redux/modal/modal.reduser';

import { Modal } from 'components/Modal/Modal';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { addFavorite, removeFavorite } from '../../redux/cars/cars.reduser';

export const CatalogItems = ({ data }) => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(selectIsOpenModal);
  const favoriteItems = useSelector(selectFavoriteItems);

  const onClickFavorite = data => {
    const item = favoriteItems.find(item => item.id === data.id);

    if (item) {
      dispatch(removeFavorite(item.id));
      Notify.success('Removed from favorites');
      return;
    }
    dispatch(addFavorite(data));
    Notify.success('Added to favorites');
    return;
  };

  return (
    <div className={css.section}>
      <ul className={css.list}>
        {data &&
          data.map(
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
              const index = favoriteItems.findIndex(item => item.id === id);

              return (
                <li key={id} className={css.listItem}>
                  <span className={css.containerFavorine}>
                    <button
                      type="button"
                      className={css.buttonFavorite}
                      onClick={() =>
                        onClickFavorite({
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
                      {index === -1 ? (
                        <MdFavoriteBorder className={css.iconFavorite} />
                      ) : (
                        <MdOutlineFavorite className={css.iconFullFavorite} />
                      )}
                    </button>
                  </span>

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
