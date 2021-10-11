const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// work in progress

exports.getLogin = (req, res, next) => {
  // TODO: render signup page with errors if any

  res.render("signon");
};

exports.postRegister = (req, res, next) => {
  // TODO: create account in DB, hash it etc what not
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((user) => {
      if (user) {
          //todo: fix multiple sent headers bug
        console.log("user already exists!");
        // todo send popup message to the User
        return res.redirect("/signon");
      }
    })
    .then(() => bcrypt.hash(password, 12))
    .then((hashedPass) => {
      const user = new User({ username: username, password: hashedPass });
      return user.save();
    })
    .catch((err) => console.log(err));

  console.log(`registration successful, welcome: ${username}`);
  res.redirect("/signon");
};

exports.postLogin = (req, res, next) => {
  // TODO: implement dashboard view if logged in
  // TODO: implement log in procedure
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        console.log("user already exists!");
        // todo send popup message to the User
        return res.redirect("./signon");
      }
      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (matched) {
        //TODO: handle sessions
        console.log(`Welcome in: ${username}!`);
      } else {
        //TODO: flash error
        console.log(`Sorry, invalid credentials!`);
      }
    })
    .catch((err) => console.log(err));

  res.redirect("/signon");
};
