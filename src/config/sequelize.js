const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(...config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => console.error("Unable to connect to database", e));

module.exports = sequelize;
