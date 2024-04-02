import { CatalogItems } from 'components/CatalogItems/CatalogItems';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../redux/cars/cars.selectors';

const Favorite = () => {
  const favoriteItems = useSelector(selectFavoriteItems);
  return (
    <div>
      <CatalogItems data={favoriteItems} />
      {favoriteItems.length === 0 && <h3>No favorites</h3>}
    </div>
  );
};

export default Favorite;
