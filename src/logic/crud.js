import sendEmail from './sendEmail';

export const sendTodaysBirthdayMails = (dbData) => {
  const todaysDate = new Date().toISOString().split('T')[0];
  for (let user of dbData) {
    if (user.date === todaysDate) sendEmail(user.name, user.email);
  }
};

export const getTodaysBirthdays = (dbData) => {
  let todaysBirthdays = dbData.filter((user) => {
    // console.log(user.date.substring(5));
    // console.log(new Date().toISOString().split('T')[0].substring(5));
    // console.log(new Date().toISOString());
    // console.log(new Date());
    return (
      user.date.substring(5) ===
      new Date().toISOString().split('T')[0].substring(5)
    );
  });

  // console.log('todaysBirthdays= ', todaysBirthdays);
  return todaysBirthdays;
};
