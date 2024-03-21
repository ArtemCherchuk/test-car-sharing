import css from './ButtonLoad.module.css';

export const ButtonLoad = ({ onClickLoadMore }) => {
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => onClickLoadMore()}
    >
      Load More
    </button>
  );
};
