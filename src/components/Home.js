import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Birthday Buddy</h1>
      </header>
      <div className="menu-items">
        <Link to="/all-birthdays" className="menu-item">
          All birthdays
        </Link>

        <Link to="/todays-birthdays" className="menu-item">
          Today's birthdays
        </Link>

        <Link to="/add-a-birthday" className="menu-item">
          Add a birthday
        </Link>

        {/* <Link to="/configure-emails" className="menu-item">
          Configure reminders
        </Link> */}
      </div>
    </div>
  );
}
