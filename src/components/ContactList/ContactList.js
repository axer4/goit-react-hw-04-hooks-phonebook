import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
function ContactList({ filteredContacts, deleteContact }) {
    return (<ul className = {styles.list}>
        {filteredContacts.map(contact => <li key={contact.id} className = {styles.item}>{contact.name} : {contact.number}
            <button onClick={() => deleteContact(contact.id)} className = {styles.button}> Delete </button>
        </li>)}
    </ul> )
}

ContactList.propTypes = {
    filteredContacts: PropTypes.array,
    deleteContact: PropTypes.func
}
    
export default ContactList;