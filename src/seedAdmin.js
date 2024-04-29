const { ROLES } = require("./constant");
const Admin = require("./models/admin.model");

(async function seedAdmin() {
    try {
        const adminUser = {
            fullname: "Kushagra Agrawal",
            password: "initial_password",
            email: "kushagrawal202@gmail.com",
            role: ROLES.ADMIN,
        };

        const seedAdmin = await Admin.create(adminUser);

        console.log(`Seed Admin: ${seedAdmin}`);
    } catch (error) {
        console.error("Error seeding admin:", error);
    }
})();
