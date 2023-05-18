import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, hendleFilterChange }) {
  return (
    <label className={css.label} htmlFor="">
      Find contacts by me
      <input
        className={css.label}
        input={filter}
        type="text"
        name="filter"
        onChange={hendleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  hendleFilterChange: PropTypes.func.isRequired,
};
