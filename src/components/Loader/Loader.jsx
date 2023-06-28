import style from '../style.module.css';

export const Loader = () => {
  return (
    <div className={style.spinner_container}>
      <div className={style.loading_spinner}></div>
    </div>
  );
};
