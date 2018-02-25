'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "name" on table "superheroes"
 * changeColumn "name" on table "superheroes"
 *
 **/

var info = {
    "revision": 7,
    "name": "name-is-not-null",
    "created": "2018-02-24T14:44:15.023Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "superheroes",
            "name",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": [3, 60]
                },
                "allowNull": false
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
                    "len": [3, 60]
                },
                "allowNull": false
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
