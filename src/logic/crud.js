import sendEmail from './sendEmail';

export const sendTodaysBirthdayMails = (dbData) => {
  const todaysDate = new Date().toISOString().split('T')[0];
  for (let user of dbData) {
    if (user.date === todaysDate) sendEmail(user.name, user.email);
  }
};

export const getTodaysBirthdays = (dbData) => {
  let todaysBirthdays = dbData.filter(
    (user) => user.date === new Date().toISOString().split('T')[0]
  );
  return todaysBirthdays;
};
