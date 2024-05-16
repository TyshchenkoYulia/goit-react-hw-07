import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filtersName = useSelector((state) => state.filters.name);
  console.log(contacts);
  const filterContacts = contacts.filter((contact) =>
    contact.value.name.toLowerCase().includes(filtersName.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
