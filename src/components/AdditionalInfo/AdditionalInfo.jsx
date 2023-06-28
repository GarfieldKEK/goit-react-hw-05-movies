import { Link } from 'react-router-dom';
import style from '../style.module.css';

const AdditionalInfo = () => {
  return (
    <div className={style.additionalInfo}>
      <p>Additional information</p>
      <nav className={style.link}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </div>
  );
};
//state={{ from: location.state.from?.search }}

export default AdditionalInfo;
