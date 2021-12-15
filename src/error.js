const green = (message) => `\x1b[32m${message}\x1b[0m`;
const red = (message) => `\x1b[31m${message}\x1b[0m`;
const yellow = (message) => `\x1b[33m${message}\x1b[0m`;
const advertisement = `\n${yellow("Plusdb => Information:")} ${green("Come here for help => https://discord.gg/MaapZw5YVC")}`;

////Err

class DatabaseError extends Error {
    constructor(message) {
        super(`${red(message)}${advertisement}`);
    }

    get name() {
        return yellow(`Plusdb => ${this.constructor.name}`)
    }
}

module.exports = DatabaseError;