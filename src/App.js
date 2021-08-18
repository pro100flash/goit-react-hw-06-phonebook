import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter";

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}
