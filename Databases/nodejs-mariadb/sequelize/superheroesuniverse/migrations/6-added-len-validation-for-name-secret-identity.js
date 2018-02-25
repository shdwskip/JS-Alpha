'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "secret_identity" on table "superheroes"
 * changeColumn "name" on table "superheroes"
 *
 **/

var info = {
    "revision": 6,
    "name": "added-len-validation-for-name-secret-identity",
    "created": "2018-02-24T14:42:07.590Z",
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
                    "len": [3, 20]
                },
                "allowNull": false,
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "superheroes",
            "name",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "allowNull": false,
                    "len": [3, 60]
                }
            }
        ]
    }
];

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
