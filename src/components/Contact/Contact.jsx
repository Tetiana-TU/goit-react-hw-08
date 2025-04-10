import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.contactcontainer}>
        <div className={css.conticon}>
          <FaUser className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.conticon}>
          <FaPhone className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
