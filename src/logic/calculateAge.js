export default function calculate_age(personDob) {
  const dateArr = personDob.split('-');
  var now = new Date();
  const dateString = dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
  console.log(dateString);

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(
    dateString.substring(6, 10),
    dateString.substring(0, 2) - 1,
    dateString.substring(3, 5)
  );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = '';
  var yearString = '';
  var monthString = '';
  var dayString = '';

  let yearAge = yearNow - yearDob;

  var monthAge, dateAge;
  if (monthNow >= monthDob) monthAge = monthNow - monthDob;
  else {
    yearAge--;
    monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) dateAge = dateNow - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 1) yearString = ' years';
  else yearString = ' year';
  if (age.months > 1) monthString = ' months';
  else monthString = ' month';
  if (age.days > 1) dayString = ' days';
  else dayString = ' day';

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString =
      age.years +
      yearString +
      ', ' +
      age.months +
      monthString +
      ', and ' +
      age.days +
      dayString +
      ' old';
  else if (age.years === 0 && age.months === 0 && age.days > 0)
    ageString = 'Only ' + age.days + dayString + ' old!';
  else if (age.years > 0 && age.months === 0 && age.days === 0)
    ageString = age.years + yearString + ' old Happy Birthday!!';
  else if (age.years > 0 && age.months > 0 && age.days === 0)
    ageString =
      age.years + yearString + ' and ' + age.months + monthString + ' old';
  else if (age.years === 0 && age.months > 0 && age.days > 0)
    ageString =
      age.months + monthString + ' and ' + age.days + dayString + ' old';
  else if (age.years > 0 && age.months === 0 && age.days > 0)
    ageString =
      age.years + yearString + ' and ' + age.days + dayString + ' old';
  else if (age.years === 0 && age.months > 0 && age.days === 0)
    ageString = age.months + monthString + ' old';
  else ageString = 'Oops! Could not calculate age!'; //need to calculate age < 1 year old

  return ageString;
}
