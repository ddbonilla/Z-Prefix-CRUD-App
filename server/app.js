const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("./db/dbConnection.js");
const app = express();

//Packages Setup
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true,
  })
);

//Cookie Session Setup and Storage
const store = new KnexSessionStore({
  knex,
  tablename: "sessions",
});

app.use(
  session({
    store: store,
    name: "bowling.sid",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//Controllers
const {
  getAllItems,
  getOneItem,
  addItem,
  updateItem,
  deleteItem,
  getManagers,
  createUser,
  getUserName,
  getUserItems,
} = require("./db/controllers");
const { Password } = require("@mui/icons-material");

//GET Requests
app.get("/", (req, res) => res.send("Welcome to the Bowling Inventory!"));

app.get("/inventory", (req, res) => {
  getAllItems()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Managers View
app.get("/inventory/:id", (req, res) => {
  getOneItem(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Visitor View
app.get("/details/:id", (req, res) => {
  getOneItem(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//POST Requests
app.post("/inventory", (req, res) => {
  if (req.body) {
    addItem(req.body)
      .then((data) => {
        res.send(data);
        console.log("data send", data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.status(400).send("invalid request");
  }
});

//PUT Requests
app.put("/inventory/:id", (req, res) => {
  updateItem(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//DELETE Requests
app.delete("/inventory/:id", (req, res) => {
  deleteItem(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Manager Section
app.get("/managers", (req, res) => {
  getManagers()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/managers/:username", (req, res) => {
  getUserName(req.params.username)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Manager user inventory list
app.get("/dashboard/:name", (req, res) => {
  getUserItems(req.params.name)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// send user details to front end
app.post("/fetch-user", async (req, res) => {
  if (req.sessionID && req.session.user) {
    res.status(200);
    return res.json(req.session.user);
  }
  return res.sendStatus(403);
});

//Create Manager
app.post("/managers", (req, res) => {
  const userData = req.body;
  userData.Password = bcrypt.hashSync(userData.Password, 10);

  if (userData) {
    createUser(userData)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.status(400).send("invalid request");
  }
});

//Login Manager
app.post("/login", async (req, res) => {
  const { Username, Password } = req.body;

  const resData = await getUserName(Username);

  if (resData.length === 0) {
    console.log("user not found");
    return res.sendStatus(404);
  }
  const userData = resData[0];

  const matches = bcrypt.compareSync(Password, userData.Password);
  if (!matches) {
    console.log("incorrect");
    return res.sendStatus(401);
  }

  //Cookie Session
  req.session.user = {
    UserId: userData.UserId,
    Username: userData.Username,
    Password: userData.Password,
    isManager: userData.isManager,
  };

  console.log("sending user", {
    Username: userData.Username,
    isManager: userData.isManager,
  });
  res
    .status(200)
    .json({ Username: userData.Username, isManager: userData.isManager });
});

//Logoff Manager/Clear Cookies
app.post("/logout", async (req, res) => {
  try {
    await req.session.destroy();
    console.log("logout successful");
    res.clearCookie("bowling.sid");
    return res.status(401).json({
      error: "logout successful",
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = app;
