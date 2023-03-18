import './AddBirthdayForm.css';

export default function AddBirthdayForm({ addBirthday }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const dob = e.target[2].value;
    const image = e.target[3].value;

    addBirthday(name, dob, image, email);
    e.target.reset();
  };

  // const handleChange = async (e) => {
  //   console.log(e);
  //   const file = e.target.files[0];
  //   try {
  //     const docRef = await addDoc(collection(db, 'birthdays'), file);
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };

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
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
