'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "test_column" to table "superheroes"
 *
 **/

var info = {
    "revision": 5,
    "name": "added-test-column",
    "created": "2018-02-24T14:21:43.783Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "superheroes",
        "test_column",
        {
            "type": Sequelize.STRING,
            "validate": {
                "len": {
                    "args": [3, 20],
                    "msg": "Test must be between 3 and 20 characters long"
                }
            },
            "allowNull": false,
            "unique": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
