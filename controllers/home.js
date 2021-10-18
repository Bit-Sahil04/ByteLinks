const Urldb = require("../models/url");
const randString = require("../utils/randString");
const { validationResult } = require("express-validator");

exports.getIndex = (req, res, next) => {
  // fetch all URLS from DB and render to the table
  Urldb.find()
    .then((urls) => {
      return res.status(200).render("index", {
        urls: urls.reverse(),
      });
    })
    .catch((err) => console.log(err));
};

exports.postUrl = (req, res, next) => {
  const userUrl = req.body.userUrl;
  console.log(req.body);
  let subUrl = randString.randString(6);

  // validating user submitted URLs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).redirect("/"); //TODO: inform user about failed URL validation
  }

  console.log(userUrl, "->", subUrl);
  Urldb.find({ shortUrl: subUrl })
    .then((url) => {
      // check for random string collision with db
      // keep generating a new random string until collision is resolved
      if (url) {
        Urldb.find().then((urls) => {
          let flag = 0;
          while (flag != undefined) {
            subUrl = randString.randString(6);
            flag = urls.find((u) => u.shortUrl === subUrl);
          }
        });
      }
      const newUrl = new Urldb({ url: userUrl, shortUrl: subUrl });
      return newUrl.save();
    })
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

exports.redirect = (req, res, next) => {
  const shortUrl = req.params.shortUrl;

  // pass-through for invalid links or favicon requests
  if (!req.params.shortUrl || shortUrl === "favicon.ico") {
    return next();
  }
  Urldb.findOne({ shortUrl: shortUrl })
    .then((url) => {
      if (url) {
        console.log(url);
        res.status(301).redirect(url.url);
      } else {
        console.log(`requested url not found ${url}`);
        res.redirect("/"); // TODO: redirect to a 404 page
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

exports.deleteUrl = (req, res, next) => {
  const subUrl = req.params.shortUrl;

  // Temporary pass-through till I setup auth checks
  return res.redirect("/");

  Urldb.deleteOne({ shortUrl: subUrl })
    .then(() => res.redirect("/"))
    .catch((e) => console.log(e));
};
