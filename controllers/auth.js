const User = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// work in progress

exports.getLogin = (req, res, next) => {
  // TODO: render signup page with errors if any

  res.render("signon");
};

exports.postRegister = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        console.log("user already exists!");
        return res.redirect("/signon");
      }
    })
    .then(() => bcrypt.hash(password, 12))
    .then((hashedPass) => {
      const user = new User({ username: username, password: hashedPass });
      return user.save();
    })
    .then((user) => {
      console.log(user);
      req.session.isLoggedIn = true;
      req.session.user = user;
      return req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));

  console.log(`registration successful, welcome: ${username}`);
  // res.redirect("/signon");
  return;
};

exports.postLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let u;
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        console.log("Sorry, invalid credentials!");
        // todo send popup message to the User
        return res.redirect("./signon");
      }
      u = user;
      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (matched) {
        req.session.isAuthenticated = true;
        req.session.user = u;
        return req.session.save((err) => {
          if (err) console.log(err);
          res.redirect("/");
        });
      } else {
        //TODO: flash error
        console.log(`Sorry, invalid credentials!`);
      }
    })
    .catch((err) => console.log(err));

};

exports.getLogout = (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.locals.isAuthenticated = false;
  }
  return res.redirect("/");
};
