import { DeleteBtn, Item } from './Contacts.styled';
import {useDeleteContactMutation} from 'redux/contactsApi'

export default function ContactsListItem({ id, name, phone, isLoading }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => deleteContact(id)}
        disabled={isLoading}
        type="button"
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
