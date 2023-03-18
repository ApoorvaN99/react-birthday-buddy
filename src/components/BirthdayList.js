import List from './List';

export default function BirthdayList({ people }) {
  return (
    <main className="birthday-list-main">
      <section className="birthday-list-container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
      </section>
    </main>
  );
}
