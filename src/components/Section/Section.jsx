import PropTypes from 'prop-types';
import s from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <div className={s.section__wrapper}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
