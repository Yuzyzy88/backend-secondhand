const {
    DB_USER = "postgres",
    DB_PASSWORD = "123",
    DB_NAME = "secondApp",
    DB_HOST = "127.0.0.1",
    DB_PORT = "5432",
  } = process.env;

module.exports = {
    development: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}_development`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: "postgres"
    },
    test: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}_test`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: "postgres"
    },
    production: {
      username: DB_USER,
      password: DB_PASSWORD,
      database: `${DB_NAME}_production`,
      host: DB_HOST,
      port: DB_PORT,
      dialect: "postgres"
    }
  }


// require("dotenv").config();

// module.exports = {
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },

//   },
//   test: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },

//   },
//   production: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },

//   }
// }
