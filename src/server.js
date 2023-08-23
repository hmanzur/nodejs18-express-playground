require('dotenv').config();

const server = require("./app");
const sequelize = require("./utils/postgresql");

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    if (process.env.MIGRATE) {
      await sequelize.sync();
    } else {
      await sequelize.authenticate();
    }

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();