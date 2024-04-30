const Admin = require("./models/admin.model");
const mongoose = require("mongoose");
const { ROLES } = require("./constant");
const connectDB = require("./db/connection");

(async () => {
    try {
        await connectDB();
        await seedAdmin();
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from mongoDB");
    }
})();

async function seedAdmin() {
    console.log("Seeding Admin..!!");

    try {
        const adminUser = {
            fullname: "Kushagra Agrawal",
            password: "initial_password",
            email: "kushagrawal202@gmail.com",
            role: ROLES.ADMIN,
        };

        const seedAdmin = await Admin.create(adminUser);

        console.log(`Seeded Admin Successfully..\nSeed Admin: ${seedAdmin}`);

        return seedAdmin;
    } catch (error) {
        console.error(`Error seeding admin: ${error}`);
        throw error;
    }
}

module.exports = seedAdmin;
