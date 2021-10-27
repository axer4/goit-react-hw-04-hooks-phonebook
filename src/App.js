import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactList/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from './App.module.css'
export default class PhoneBook extends Component {
 state = {
  contacts: [
  ],
  filter: '',
}
  onChangeInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }
  addContactHandler = e => {
    // this.dublicateAlert(this.state.name)
    if (this.dublicateAlert(this.state.name)) {
      return 
    }
    else {
      this.setState(prevState => ({
        contacts : [{ name: this.state.name, id: uuidv4(), number: this.state.number}, ...prevState.contacts],
      }))
     }
  }
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value })
  }
  dublicateAlert = (name) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
      return true
  }
  }
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
    // console.log(this.state.contacts);
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({
      contacts: JSON.parse(contacts),
    })

    } 
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    // const { contacts, filter } = this.state;
        const filteredContacts = this.state.contacts.filter(contact => {
          return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
        })
    
    // console.log(filteredContacts);
    return <>
      <h1 className = {styles.heading} >PhoneBook</h1>
      <ContactForm
        onChangeInputHandler={this.onChangeInputHandler}
        addContactHandler={this.addContactHandler}
        dublicateAlert = {this.dublicateAlert}
        name={this.state.name}
        number = {this.state.number}
      />
      <h3 className = {styles.heading}>Contacts</h3>
      <Filter
        filter={this.state.filter}
        handleFilterChange = {this.handleFilterChange}
      />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact = {this.deleteContact}
      />
    </>
  }
}


