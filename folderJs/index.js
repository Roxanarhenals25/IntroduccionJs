const particulars = [ 
    {
        name: "Roxana Rhenals",
        age: 23,
        isDeveloper: true,
        date : new Date(2000,0,25),
        favBook: {
            titulo: "Los cuatro acuerdos",
            autor: "Dr Miguel Ruiz",
            date: new Date(1997)
        }
    }
]
console.log(particulars)


const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
module.exports = logger;

function throwCustomError(message) {
    throw new Error(message);
  }
  try {
    throwCustomError("Este es mi mensaje de error personalizado");
  } catch (error) {
    console.error(error.message);
  }

