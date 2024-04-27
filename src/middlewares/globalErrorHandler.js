const { ENV } = require("../config/config");

const globalErrorHandler = (err, req, res, next) => {
    if (ENV === "development") {
        console.error(err.stack);
    }

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        statuscode,
        message: err.message,
        errors: err.errors,
        success: err.success,
    });
};

module.exports = globalErrorHandler;
