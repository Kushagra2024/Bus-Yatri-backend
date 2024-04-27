const asyncHandler = (fn) => async (req, res, next) => {
    try {
        // Execute the provided asynchronous function (fn) with the Express request, response, and next parameters
        await fn(req, res, next);
    } catch (error) {
        // If an error occurs during execution, handle it by passing it to global error handler middleware
        next(error);
    }
};

module.exports = asyncHandler;
