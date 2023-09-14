class CustomApiError extends Error{
    constructor(message, statusCodes){
        super(message);
        this.message = message;
        this.statusCode = statusCodes;
    }
}

module.exports = CustomApiError;