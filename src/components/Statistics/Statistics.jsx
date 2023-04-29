import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={clsx(css.statistics)}>
      <p>
        <span>Good:</span> <span>{good}</span>
      </p>
      <p>
        <span>Neutral:</span> <span>{neutral}</span>
      </p>
      <p>
        <span>Bad:</span> <span>{bad}</span>
      </p>
      <p>
        <span>Total:</span> <span>{total}</span>
      </p>
      <p>
        <span>Positive persentage:</span> <span>{positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
