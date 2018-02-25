'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "secret_identity" on table "superheroes"
 *
 **/

var info = {
    "revision": 8,
    "name": "secret-identity-is-only-letters",
    "created": "2018-02-24T14:48:18.753Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "superheroes",
        "secret_identity",
        {
            "type": Sequelize.STRING,
            "validate": {
                "is": {},
                "len": [3, 20]
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
