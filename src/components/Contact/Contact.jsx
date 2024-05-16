import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({
  contact: {
    id,
    value: { name, telNumber },
  },
}) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.telNumber}>
          <BsTelephoneFill className={css.icon} />
          {telNumber}
        </p>
      </div>

      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
