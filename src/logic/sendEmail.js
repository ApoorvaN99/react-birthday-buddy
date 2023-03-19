import emailjs from 'emailjs-com';

const sendEmail = (userName, userEmail) => {
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
        console.log(
          'Message Sent, We will get back to you shortly',
          result.text
        );
      },
      (error) => {
        alert('An error occurred, Please try again', error.text);
      }
    );
};

export default sendEmail;
