import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carsList } from '../../redux/cars/cars.selectors';
import { fetchCars } from '../../redux/cars/operations';
import css from './CatalogItems.module.css';

export const CatalogItems = () => {
  const cars = useSelector(carsList);

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
            accessories,
            rentalPrice,
            rentalCompany,
            address,
          }) => {
            const dataAdress = address.split(',');

            return (
              <li key={id} className={css.listItem}>
                <div>
                  <img src={img} alt={description} className={css.img} />
                  <div>
                    <p>{make}</p>
                    <span>{model}, </span>
                    <span>{year}</span>
                    <p>{rentalPrice}</p>
                  </div>
                  <div>
                    <p>{dataAdress[1]}</p>
                    <p>{dataAdress[2]}</p>
                    <p>{rentalCompany}</p>
                    <p>{type}</p>
                    <p>{make}</p>
                    <p>{id}</p>
                    <p>{accessories[0]}</p>
                  </div>
                  <button type="button">Learn More</button>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
