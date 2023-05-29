///  La fecha de hoy
const date = new Date()
console.log(date)

///  La fecha de tu nacimiento
const myBirthday = new Date(2000,0,25)
console.log(myBirthday)

///  Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let compareDate = date > myBirthday
console.log(compareDate)

///  Una variable que contenga el día de tu nacimiento
let dateOfBirth = myBirthday.getDate()
console.log(dateOfBirth)

///  Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let monthOfBirth = myBirthday.getMonth()
console.log(monthOfBirth)

///  Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let yearOfBirth = myBirthday.getFullYear()
console.log(yearOfBirth)
