const { PORT } = require("./config/config");
const connectDB = require("./db/connection");
const app = require("./app");

const port = PORT || 3000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started listening on PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
