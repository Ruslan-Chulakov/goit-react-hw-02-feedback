import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={clsx(css.section)}>
      <h2 className={clsx(css.title)}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Section;
