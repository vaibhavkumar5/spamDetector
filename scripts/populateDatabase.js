const faker = require("faker");
const { sequelize } = require("../models");
const User = require("../models/User");

const populateDatabase = async () => {
  await sequelize.sync({ force: true });

  for (let i = 0; i < 100; i++) {
    await User.create({
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  }

  console.log("Database populated with sample data");
  process.exit();
};

populateDatabase();
