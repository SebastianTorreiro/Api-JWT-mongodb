require('dotenv').config()

module.exports = {
  // configuracion de db
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_HOST || "database_development",
    host: process.env.DB_DATABASE ||  "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",

    //Configurar Seeds
    seederStorage: "sequelize",
    seederStorageTableName: "seeds",

    //Configuracion del migrations
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations"
  }

