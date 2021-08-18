import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { getVisibleContacts } from "../../redux/selectors";
import S from "./Contacts.module.css";

function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={S.container}>
          <p className={S.name}>
            {name}: {number}{" "}
          </p>
          {
            <button
              className={S.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Удалить
            </button>
          }
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
