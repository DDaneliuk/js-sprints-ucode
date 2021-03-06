const config = require("./config.json")
const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const { request } = require("http");
const { send } = require("process");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const host = "127.0.0.1";
const port = process.env.PORT || 3001;

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
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/public", express.static(__dirname + "/")); // !CSS

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})



const salt = bcrypt.genSaltSync(10);

app.post('/signup', function(req, res){
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
    
    if (userPass !== passConfirm){
      res.send({message: "Incorect confirm password"})
    } 
    else{
      connection.query("SELECT * FROM users WHERE email = ?", [user.email],
      function(err, results, fields) {
        if(results.length == 0){
          connection.query('INSERT INTO users SET ?',user, function(error, results, fields){
                if (error){
                  res.send({"message":"Something went wrong"})
                }
                else{
                  res.sendFile(path.join(__dirname + '/login.html'))
                }
              })
        } else{
          res.send({"error":"User with this email register already"})
        }
    });
    }
  })

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname + '/login.html'))
})

app.post('/home', function(req, res){
  let userPass = req.body.password
  encryptedPassword = bcrypt.hashSync(userPass, salt)
  let user = {
    "email":req.body.email,
    "password":req.body.password
  }
  if(user.email && user.password){

      let sqlQuery = "SELECT * FROM users WHERE email = ?"
      connection.query(sqlQuery, [user.email], async function(error, results, fields){
          if (!results || !(await bcrypt.compare(user.password, results[0].password))){
            res.send({error:"Passwod or email is not correct"})
          }
          else{
            // create token for user
            let id = results[0].id
            let token = jwt.sign({id}, "supersecurepass", {expiresIn: "3d"})
            // write token to cookies
            const cookieOptions = {
              expires: new Date(
                Date.now() + 3 * 24 * 60 * 60
              ),
              httpOnly: true
            }
            res.cookie('jwt', token, cookieOptions);
            res.sendFile(path.join(__dirname + '/home.html'))
            //add boolen value to session about log in
            req.session.loggedin = true;
          }
        })
    
  } else{
    res.send({error:"Fill all field"})
  }
})

app.get('/home', function(req, res){
  if(req.session.loggedin){
    res.sendFile(path.join(__dirname + '/home.html'))
  }
  else{
    res.send('Please login to view this page!');
  }
})

app.get('/reminder', function(req, res){
  res.sendFile(path.join(__dirname + "/remind.html"))
})

app.post('/send', function(req, res){
  let userEmail = req.body.email
  if(userEmail){
    let sqlQuery = "SELECT * FROM users WHERE email = ?"
    connection.query(sqlQuery, [userEmail], async function(error, results, fields){
      if(results.length === 0){
        res.send({error:"invalid email address"})
      }
      else{
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
          host:"smtp.ethereal.email",
          port: 587,
          secure: false,
          auth:{
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
  
      let info = await transporter.sendMail({
        from: '"Remainder"<reminder@example.com>',
        to: userEmail,
        subject: "Remind a password",
        html: `<p>${results[0].password}</p>`
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
    })
  }
  else{
    return
  }
})

app.use((req, res, next) =>{
  res.sendFile(path.join(__dirname + '/404.html'))
})

  
app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${
      process.env.PORT || 3000
    } \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});