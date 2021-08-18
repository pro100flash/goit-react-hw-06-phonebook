import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { addContact } from "../../redux/actions";
import S from "./Form.module.css";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact(name, number));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const chekName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const chekNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (chekName(name)) {
      alert(`${name} is already added.`);
    } else if (chekNumber(number)) {
      alert(`${number} is already added.`);
    } else if (name.trim() === "" || number.trim() === "") {
      alert("All of inputs must be not empty");
    } else {
      onSubmit(name, number);
    }
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={S.form}>
      <label className={S.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder=""
          onChange={handleChange}
          className={S.input}
        />
      </label>
      <label className={S.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder=""
          onChange={handleChange}
          className={S.input}
        />
      </label>

      {
        <button type="submit" className={S.button}>
          Add contact
        </button>
      }
    </form>
  );
}
