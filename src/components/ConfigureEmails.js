// import { ToggleButton } from './ToggleButton';
import './ConfigureEmails.css';
import emailjs from 'emailjs-com';

export default function ConfigureEmails({ dbData }) {
  // const toggleSendEmail = (state) => {
  //   console.log('Toggled:', state);
  // };

  const sendmail = (userName, userEmail) => {
    console.log(userName);
    console.log(userEmail);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          toName: userName,
          toEmail: userEmail,
          teamName: process.env.REACT_APP_TEAM_NAME,
        },
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert('Message Sent, We will get back to you shortly', result.text);
        },
        (error) => {
          alert('An error occurred, Please try again', error.text);
        }
      );
  };

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
            <button onClick={() => sendmail(user.name, user.email)}>
              send email now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
