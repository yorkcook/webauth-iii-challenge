const bcrypt = require("bcryptjs");
const yorkPassword = bcrypt.hashSync("LovesLauren", 10);
const laurenPassword = bcrypt.hashSync("LovesYork", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "York",
          password: yorkPassword,
          department: "Team YoLo"
        },
        {
          username: "Lauren",
          password: laurenPassword,
          department: "Team YoLo"
        }
      ]);
    });
};
