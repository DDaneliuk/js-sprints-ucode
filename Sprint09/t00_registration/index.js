const config = require("./config.json")
const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const { request } = require("http");

const host = "127.0.0.1";
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
})

connection.connect(function(err){
  if(err){
    return console.error("Error: " + err.message);
  }
  else{
    console.log("Successfully connected to MySQL");
  }
});

const app = express();
app.use(session({secret:'secret', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/public", express.static(__dirname + "/")); // !CSS

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/signup', function(req, res){
    console.log(req.body)
    const salt = bcrypt.genSaltSync(10);
    sess = req.session;

    let userPass = req.body.password;
    let passConfirm = req.body.confirm;
    encryptedPassword = bcrypt.hashSync(userPass, salt)

    let user = {
      "login":req.body.login,
      "name": req.body.name,
      "email":req.body.email,
      "password":encryptedPassword
    }

    console.log(encryptedPassword)
    
    if (userPass !== passConfirm){
      res.send({message: "Incorect confirm password"})
    } else{
      connection.query('INSERT INTO users SET ?',user, function(error, results, fields){
        if (error){
          res.send({"message":"Error"})
        }
        else{
          res.send({"success":"User register sucessfully"})
        }
      })
    }
  })
  
app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${
      process.env.PORT || 3000
    } \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});