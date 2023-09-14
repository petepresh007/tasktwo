const CustomApiError = require("../error/customApiError");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        res.status(err.statusCodes).json({ msg: err.message });
    }
    return res.status(500).json({ msg: "internal server error" });
}


module.exports = errorHandler;