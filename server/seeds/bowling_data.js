const { Password } = require("@mui/icons-material");
const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const users = [
  {
    Username: "Jason",
    Password: bcrypt.hashSync("password", 10),
    isManager: false,
  },
  {
    Username: "Joseph",
    Password: bcrypt.hashSync("password", 10),
    isManager: false,
  },
  {
    Username: "Jacob",
    Password: bcrypt.hashSync("password", 10),
    isManager: true,
  },
  {
    Username: "Kyle",
    Password: bcrypt.hashSync("password", 10),
    isManager: false,
  },
  {
    Username: "David",
    Password: bcrypt.hashSync("password", 10),
    isManager: true,
  },
];

const bowlingItems = [
  {
    ItemName: "Brunswick TZone Indigo Swirl",
    Type: "Spare Ball",
    Description:
      "A perfect ball for the bowler who is just beginning or as a spare for those extra few pins. Grab this TZone today for your arsenal! This TZone features an Indigo Swirl design that is sure to add to your game.",
    Quantity: 250,
    UserId: 1,
  },
  {
    ItemName: "Hammer Black Widow Pink Pearl Urethane",
    Type: "Mid Performance",
    Description:
      "Hammer has taken components from some of the best Hammer bowling balls and combined them into the Black Widow Pink Pearl Urethane.",
    Quantity: 300,
    UserId: 1,
  },
  {
    ItemName: "Hammer Black Widow 2.0 Hybrid",
    Type: "Upper Mid Performance",
    Description:
      "The Black Widow ball nameplate is one of the most successful of all time.",
    Quantity: 200,
    UserId: 2,
  },
  {
    ItemName: "Brunswick TZone Caribbean Blue",
    Type: "Spare Ball",
    Description:
      "It's always good to have a spare! Get pinpoint accuracy and show your style. This TZone Caribbean Blue makes a great gift for all types of bowlers!.",
    Quantity: 100,
    UserId: 2,
  },
  {
    ItemName: "Brunswick TZone Frozen Bliss",
    Type: "Spare Ball",
    Description:
      "Ice the competition with the Brunswick TZone Frozen Bliss. This fun plastic/spare ball not only looks good on the lanes but is perfect for beginners, straight bowlers, or pros looking for a spare ball.",
    Quantity: 59,
    UserId: 3,
  },
  {
    ItemName: "Storm Phaze II",
    Type: "Upper Mid Performance",
    Description:
      "The Storm Phaze II has the attributes of both an innovative core and coverstock technology. The TX-16 Solid Reactive coverstock leaves an unbelievable footprint on the lane.",
    Quantity: 49,
    UserId: 3,
  },
  {
    ItemName: "900 Global Eternity Pear",
    Type: "High Performance",
    Description:
      "The S84 Response Pearl Reactive coverstock on this ball has the capability of being fine-tuned to match a variety of oil conditions.",
    Quantity: 10,
    UserId: 4,
  },
  {
    ItemName: "Track Archetype",
    Type: "High Performance",
    Description:
      "This ball features a modified slim version of the I-Core 3.0 core and the QR-11 Solid Reactive coverstock. The slim design of the core results in a higher RG and asymmetry.",
    Quantity: 74,
    UserId: 4,
  },
  {
    ItemName: "Radical Katana Assault",
    Type: "High Performance",
    Description:
      "They took this same ball and wrapped it in the revolutionary skid snap coverstock, the HK22 - HyperKinetic Pearl.",
    Quantity: 189,
    UserId: 5,
  },
  {
    ItemName: "Ebonite Game Braker 4 Hybrid",
    Type: "Mid Performance",
    Description:
      "This ball features the Enhanced V2 core which is wrapped with the famous GB 12.0 cover in a Hybrid Reactive version utilizing the HK22 coverstock base.",
    Quantity: 201,
    UserId: 5,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users_tbl").del();
  await knex("users_tbl").insert(users);

  await knex("bowling_tbl").del();
  await knex("bowling_tbl").insert(bowlingItems);
};
