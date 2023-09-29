import React from 'react';
import style from './WaiterItem.module.css';

export function EditForm({ waiter, onWaiterSubmit }) {
  const [firstName, setFirstName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  React.useEffect(() => {
    if (waiter) {
      setFirstName(waiter.firstName);
      setPhone(waiter.phone || ''); // Установка значения по умолчанию для phone, чтобы избежать ошибок
    }
  }, [waiter]);

  const onSubmit = (event) => {
    event.preventDefault();

    onWaiterSubmit({
      ...waiter,
      firstName,
      phone,
    });

    setFirstName('');
    setPhone('');
  };

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" />

      <label htmlFor="phone">Phone</label>
      <input value={phone} onChange={onPhoneChange} type="text" id="phone" />

      <button type="submit" className={style.ml10}>
        Save
      </button>
    </form>
  )
}