// import { ToggleButton } from './ToggleButton';
import './ConfigureEmails.css';
import sendEmail from '../logic/sendEmail';

export default function ConfigureEmails({ dbData }) {
  // const toggleSendEmail = (state) => {
  //   console.log('Toggled:', state);
  // };

  return (
    <div className="configure-emails-container">
      <h1>Configure emails</h1>
      <div className="configure-emails-list">
        {dbData.map((user, idx) => (
          <div key={idx} className="configure-emails-user">
            <span>{user.name}</span>
            {/* <ToggleButton
              label="On / Off"
              toggled={false}
              toggleSendEmail={toggleSendEmail}
            /> */}
            <button onClick={() => sendEmail(user.name, user.email)}>
              send email now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
