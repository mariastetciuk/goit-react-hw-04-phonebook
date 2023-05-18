import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localeStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (localeStorageData) {
      this.setState({ contacts: localeStorageData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addContact = (name, number, id) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  deleteContact = name => {
    const contacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase() !== name.toLowerCase();
    });

    this.setState(() => {
      return {
        contacts: [...contacts],
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          hendleFilterChange={this.handleInputChange}
        />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
