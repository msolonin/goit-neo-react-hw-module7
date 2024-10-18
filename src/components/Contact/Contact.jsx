import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import {deleteContact} from "../../redux/contactsOps.js";

const Contact = ({id, name, number }) => {
    const dispatch = useDispatch();
  return (
      <div className={css.contactCard}>
          <div className={css.contactInfo}>
              <span className={css.contactIcon}>📞</span>
              <div className={css.contactDetails}>
                  <span className={css.contactName}>{name}</span>
                  <span className={css.contactNumber}>{number}</span>
              </div>
          </div>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </div>
      // <div>
      //     <p>{name}</p>
      //     <p>{number}</p>
      //     <button onClick={() => deleteContact(name)}>Delete</button>
      // </div>
  );
};

export default Contact;