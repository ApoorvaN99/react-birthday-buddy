import './List.css';
import calculate_age from '../logic/calculateAge';

export default function List({ people }) {
  const personCard = people.map((person) => (
    <article className="person" key={person.id}>
      <img
        src={
          person.image
            ? person.image
            : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        }
        alt="a person"
      />
      <div>
        <h4>{person.name}</h4>
        <p>{calculate_age(person.date)}</p>
      </div>
    </article>
  ));

  return <div>{personCard}</div>;
}
