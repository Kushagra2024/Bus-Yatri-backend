require("dotenv").config({ path: ".env" });

const _CONFIG = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
};

const config = Object.freeze(_CONFIG);

module.exports = config;
