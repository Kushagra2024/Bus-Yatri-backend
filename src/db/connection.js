const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config/config");
const { DB_NAME } = require("../constant");

const db_Connection_String =
    `${MONGODB_URI}/${DB_NAME}` || `mongodb://127.0.0.1:27017/${DB_NAME}`;

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB Successfully..");
        });

        mongoose.connection.on("error", (error) => {
            console.error("MongoDB connection error.\n", error);
        });

        const connectionInstance = await mongoose.connect(
            `${db_Connection_String}`
        );

        console.log(`DB Host: ${connectionInstance.connection.host}`);

        return connectionInstance;
    } catch (error) {
        console.error("MongoDB connection Failed.\n", error);
        process.exit(1);
    }
};

module.exports = connectDB;
