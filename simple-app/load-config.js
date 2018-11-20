var config = require("./config/" + (process.env.NODE_ENV || "dev") + ".js");
module.exports = config;