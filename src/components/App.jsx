import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { usePrevious } from 'hooks';
import {
  useFetchAllContactsQuery,
  useAddContactMutation,
} from 'redux/contactsApi';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import UserMenu from 'components/UserMenu';
import { Register } from 'pages';

export default function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts = [], isFetching } = useFetchAllContactsQuery();
  const [addContact] = useAddContactMutation();
  const prevContacts = usePrevious(contacts);

  useEffect(() => {
    if (contacts > prevContacts) {
      toast.success('Contact was added succesfully');
    }

    if (contacts < prevContacts) {
      toast.success('Contact was deleted succesfully');
    }
  }, [contacts, prevContacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onSubmitForm = ({ name, phone }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      toast.error(`${name} is already exists`);
      return;
    }
    addContact({ name, phone });
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ToastContainer />
      <Register />
      <UserMenu />
      <Section title="Phonebook">
        <Phonebook onSubmit={onSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts isLoading={isFetching} contacts={filterContacts()} />
      </Section>
    </>
  );
}
