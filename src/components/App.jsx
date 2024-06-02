import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()).then(response => console.log('Fetched contacts:', response));

  }, [dispatch])

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
        <FilterContacts />
        <ContactList />
      </Section>
    </>
  );
};