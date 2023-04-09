import React from 'react';
import { Item, Button, Loader, Delete } from './ContacList.Styled';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const [filteredContacts, setFilteredContacts] = useState([]);

  const input = useSelector(selectFilter);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const filteredContacts = await data.filter(contact =>
          contact.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredContacts(filteredContacts);
      } catch (error) {}
    };
    getContacts();
  }, [data, input]);

  return (
    <>
      {isLoading && (
        <Loader>
          <Puff />
        </Loader>
      )}
      {filteredContacts !== [] && (
        <ul>
          {filteredContacts.map(({ name, phone, id }) => (
            <Item key={id}>
              <span>{name}:</span>
              <span>{phone}</span>

              <Button
                type="button"
                disabled={isDeliting}
                onClick={() => deleteContact(id)}
              >
                {isDeliting && <Puff height="20" width="20" color="#3399cc" />}
                {!isDeliting && <Delete />}
              </Button>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
