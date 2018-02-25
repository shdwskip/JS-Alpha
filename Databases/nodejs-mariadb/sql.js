const mysql = require('mysql');
let connection = null;

const setup = (config) => {
    connection = mysql.createConnection(config);
    connection.connect();
};

const execute = (queryString) => {
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, results) => {
            if (err) {
                return reject(err);
            }

            return resolve(results);
        });
    });
};

module.exports = {
    setup,
    execute,
};
