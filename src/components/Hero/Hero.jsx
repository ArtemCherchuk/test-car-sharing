import { useNavigate } from 'react-router-dom';
import css from './Hero.module.css';

export const Hero = () => {
  const navigate = useNavigate();
  const onClickView = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.section}>
      <div className={css.background}>
        <h1 className={css.title}>Car rental in all corners of Ukraine</h1>
        <button type="button" className={css.button} onClick={onClickView}>
          View catalog
        </button>
      </div>
    </div>
  );
};
