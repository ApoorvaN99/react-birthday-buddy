import { useState } from 'react';
import './AddBirthdayForm.css';

export default function AddBirthdayForm({ addBirthday }) {
  const [nameValid, setNameValidity] = useState(false);
  const [emailValid, setEmailValidity] = useState(false);
  const [dobValid, setDobValidity] = useState(false);
  const [imageValid, setImageValidity] = useState(false);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const fieldValue = e.target.value;
    let value;

    switch (name) {
      case 'name':
        value = fieldValue.match(/[a-zA-Z]*/i) === '' ? false : true;
        setNameValidity(value);
        break;
      case 'email':
        value =
          fieldValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) === '' ? false : true;
        setEmailValidity(value);
        break;
      case 'dob':
        value =
          fieldValue.match(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/) === ''
            ? false
            : true;
        setDobValidity(value);
        break;
      case 'image':
        value =
          fieldValue.match(
            /.*\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)$/
          ) === ''
            ? false
            : true;
        setImageValidity(value);
        break;
      default:
        console.log('did not match anythng');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const dob = e.target[2].value;
    const image = e.target[3].value;

    addBirthday(name, dob, image, email);
    e.target.reset();
  };

  return (
    <section className="birthday-form-container">
      <h1>Add someone's birthday</h1>

      <form
        className="birthday-form"
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="full-name">
          Full Name{' '}
          <input
            id="full-name"
            type="text"
            name="name"
            onChange={handleUserInput}
            required
          />
        </label>
        <label htmlFor="email">
          Email{' '}
          <input
            id="mail"
            type="mail"
            name="email"
            onChange={handleUserInput}
            required
          />
        </label>
        <label htmlFor="dob">
          Date of birth{' '}
          <input
            id="dob"
            type="date"
            name="dob"
            onChange={handleUserInput}
            required
          />
        </label>
        <label htmlFor="image">
          Image{' '}
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleUserInput}
          />
        </label>
        <button
          type="submit"
          disabled={
            (nameValid && emailValid && dobValid) || imageValid ? false : true
          }
        >
          Add
        </button>
      </form>
    </section>
  );
}
