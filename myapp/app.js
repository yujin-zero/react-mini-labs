require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const session = require("express-session");

const boardRouter = require("./routes/board");
const birdsRouter = require("./routes/birds");
const commentRouter = require("./routes/comment");

const mongoose = require("mongoose");
const DB_URL = process.env.MONGO_URL;
mongoose
  .connect(DB_URL, {
    retryWrites: true,
    w: "majority",
    appName: "Cluster0",
  })
  .then(() => {
    console.log("Connected Successful");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "<my-secret>",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // https만 가능
    },
  })
);
app.use((req, res, next) => {
  console.log("미들웨어");
  console.log(req.originalUrl);

  /**
   * 모든 요청 url의 path를 session의 배열로 관리
   */

  if (req.session.urlPath) {
    req.session.urlPath.push(req.originalUrl);
  } else {
    req.session.urlPath = [req.originalUrl];
  }

  console.log(req.session.urlPath);

  next();
});
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/birds", birdsRouter);
app.use("/comment", commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json(res.locals);
});

module.exports = app;
