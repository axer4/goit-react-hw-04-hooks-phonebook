import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactList/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from './App.module.css'
import { useEffect, useState } from 'react';
export default function PhoneBook() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts')
    return JSON.parse(saved);
  })
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;
    }
  }
  const addContactHandler = e => {
    if (dublicateAlert(name)) {
      return
    }
    else {
      setContacts([...contacts, { name: name, number: number,id : uuidv4() }])
    }
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const dublicateAlert = (name) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return true
    }
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  })
      const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
  return <>
    <h1 className={styles.heading} >PhoneBook</h1>
    <ContactForm
      onChangeInputHandler={onChangeInputHandler}
      addContactHandler={addContactHandler}
    />
     <h3 className={styles.heading}>Contacts</h3>
    <Filter
      filter={filter}
      handleFilterChange={handleFilterChange}
    />
   <ContactList
      filteredContacts={filteredContacts}
      deleteContact={deleteContact}
    />
  </>
}
