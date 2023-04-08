const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

// const store = new SessionStore({
//     knex,
//     tablename: "sessions",
// });

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())

//controllers
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

//Managers
app.get("/inventory/:id", (req, res) => {
  getOneItem(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Visitor
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

//Admin section
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

app.post("/managers", (req, res) => {

  const userData = req.body
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

app.post("/login", async (req, res) => {

  const { Username, Password } = req.body;

  const resData = await getUserName(Username);

  if(resData.length === 0) {
    console.log("user not found");
    return res.sendStatus(404);
  }
  const userData = resData[0];

  const matches = bcrypt.compareSync(Password, userData.Password)
  if(!matches) {
    console.log("incorrect");
    return res.sendStatus(401);
  }
  console.log("sending user", {Username: userData.Username, isManager: userData.isManager});
  res.status(200).json({Username: userData.Username, isManager: userData.isManager})
});

app.get('/dashboard/:name', (req, res) => {
  getUserItems(req.params.name)
    .then(data => {
      res.send(data)
    })
    .catch((err)=>{
      res.send(err);
    })
})



module.exports = app;
