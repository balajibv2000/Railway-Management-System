const Pool = require("pg").Pool;

const pool = new Pool({
    user: "balajibv",
    password: "balaji2000",
    host: "localhost",
    database: "railway"
});

module.exports = pool;