import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.container}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3470ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          margin: 0,
        }}
        wrapperClass=""
      />
    </div>
  );
};
