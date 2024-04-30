const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const { ROLES } = require("../constant");

const adminSchema = new Schema(
    {
        fullname: {
            type: String,
            required: [true, "admin fullname is required"],
            validate: [
                function (value) {
                    return value.trim().length > 0;
                },
                "Fullname cannot be empty",
            ],
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minLength: [6, "password length cannot be less than 6"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            lowercase: true,
            validate: [isEmail, "Please enter a valid email"],
            index: true,
        },
        role: {
            type: String,
            enum: [ROLES.ADMIN],
            default: ROLES.ADMIN,
        },
    },
    { timestamps: true }
);

// hash password before save or password modification
adminSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        return next();
    } catch (error) {
        console.error("Error while hashing password", error);
    }
});

// custom method for verifying user password
adminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Admin = model("Admin", adminSchema);

module.exports = Admin;
