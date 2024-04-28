const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const { CORS_ORIGIN, SESSION_SECRET_KEY } = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const ApiError = require("./utils/ApiError");

const app = express();

app.use(
    cors({
        origin: CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
    session({
        secret: SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);

// routes

app.use(globalErrorHandler);

module.exports = app;
