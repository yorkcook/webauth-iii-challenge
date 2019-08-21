const bcrypt = require("bcryptjs");
const hash = bcrypt.hashSync("LovesLauren", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "York",
          password: hash,
          department: "Team YoLo"
        },
        {
          username: "Lauren",
          password: "LovesYork",
          department: "Team YoLo"
        }
      ]);
    });
};
