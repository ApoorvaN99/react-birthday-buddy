import { useState } from 'react';
import './AddBirthdayForm.css';

export default function AddBirthdayForm({ addBirthday }) {
  const [formValidity, setFormValidity] = useState(false);

  const handleFormValidation = (name, email, dob, image) => {
    const nameValid = name.match(/[a-zA-Z]*/i) === '' ? false : true;

    const emailValid =
      email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) === '' ? false : true;

    const dobValid =
      dob.match(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/) === '' ? false : true;

    const imageValid =
      image.match(/.*\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)$/) === ''
        ? false
        : true;

    return nameValid && emailValid && dobValid && imageValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const dob = e.target[2].value;
    const image = e.target[3].value;

    setFormValidity(handleFormValidation(name, email, dob, image));
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
          Full Name <input id="full-name" type="text" required />
        </label>
        <label htmlFor="email">
          Email <input id="mail" type="mail" required />
        </label>
        <label htmlFor="dob">
          Date of birth <input id="dob" type="date" required />
        </label>
        <label htmlFor="image">
          Image <input id="image" type="file" />
        </label>
        <button type="submit" disabled={formValidity ? false : true}>
          Add
        </button>
      </form>
    </section>
  );
}
