class DatabaseError extends Error {
    constructor(message = "Unknown Error") {
        super();
        this.name = "plusdb";
        this.message = message;
    };
};
module.exports = DatabaseError;