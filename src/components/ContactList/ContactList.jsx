import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contacts__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: <span className={css.contacts__span}>{number}</span>
            <button
              className={css.contacts__btn}
              type="button"
              onClick={() => deleteContact(name)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
