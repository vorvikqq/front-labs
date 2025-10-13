class User {
  constructor(lastName, firstName, age, education, details, date, time) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.education = education;
    this.details = details;
    this.detailsLength = details.length;
    this.date = new Date(date);
    this.time = time;
  }

  get birthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

const users = [
  new User("Ivanov", "Ivan", 40, "Higher", "Details about Ivan", "2025-01-15", "10:30"),
  new User("Petrov", "Petr", 50, "Higher", "Some more details", "2025-01-20", "10:30"),
  new User("Sidorov", "Sidr", 60, "Secondary", "Extra info here", "2025-02-05", "09:00"),
  new User("Kuznetsov", "Alex", 38, "Higher", "Very long details field for Alex", "2025-05-10", "16:45"),
  new User("Smirnov", "Oleg", 45, "Higher", "Short details", "2025-05-01", "11:20"),
  new User("Volkov", "Dmitry", 55, "Higher", "Important info about Volkov", "2025-08-22", "13:00"),
  new User("Fedorov", "Fedor", 35, "Higher", "Fedor details here", "2025-08-30", "12:10"),
  new User("Morozov", "Igor", 42, "Secondary", "Some really long details for testing", "2025-11-18", "15:40"),
  new User("Novikov", "Nikolay", 33, "Higher", "Info", "2025-11-12", "08:55"),
  new User("Solovyov", "Sergey", 48, "Higher", "Details about Sergey", "2025-02-25", "09:30")
];

function usersByMonthAndTime(users, month, time) {
  return users.filter(user => 
    user.date.getMonth() + 1 === month && user.time === time
  );
}

console.log(usersByMonthAndTime(users, 1, "10:30"));

const maxDetailsUser = users.reduce((maxUser, user) => 
  user.detailsLength > maxUser.detailsLength ? user : maxUser);

console.log(`Максимальна довжина details: ${maxDetailsUser.detailsLength}`);
console.log(`Вік: ${maxDetailsUser.age}, Освіта: ${maxDetailsUser.education}`);

function classifyUsers(users) {
  const businessActive = [];
  const businessPassive = [];
  const others = [];

  users.forEach(user => {
    const month = user.date.getMonth() + 1;

    const isActiveSeason = [12,1,2,3,4,5,9,10,11].includes(month);
    const isPassiveSeason = [6,7,8].includes(month);

    if (user.age >= 35 && user.age <= 55 && isActiveSeason) businessActive.push(user);
    else if (isPassiveSeason) businessPassive.push(user);
    else others.push(user);
  });

  return {
    "бізнес-активні середнього віку": businessActive.length,
    "бізнес-пасивні похилого": businessPassive.length,
    "Інші": others.length
  };
}

console.log(classifyUsers(users));

function sortByName(users) {
  return [...users].sort((a, b) => {
    if (a.lastName === b.lastName) return a.firstName.localeCompare(b.firstName);
    return a.lastName.localeCompare(b.lastName);
  });
}

function printUsersNameAndBirthYear(users) {
  users.forEach(user => {
    console.log(`${user.lastName} ${user.firstName} - приблизний рік народження: ${user.birthYear}`);
  });
}

const sorted_users = sortByName(users);
printUsersNameAndBirthYear(sorted_users)