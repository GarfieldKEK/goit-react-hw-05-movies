import PropTypes from 'prop-types';
import style from '../style.module.css';

const Review = ({ review }) => {
  return (
    <div className={style.review}>
      <h3> Author: {review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
