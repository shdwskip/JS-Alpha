'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "test_column" from table "superheroes"
 * changeColumn "secret_identity" on table "superheroes"
 * changeColumn "secret_identity" on table "superheroes"
 * changeColumn "secret_identity" on table "superheroes"
 * changeColumn "name" on table "superheroes"
 * changeColumn "name" on table "superheroes"
 *
 **/

var info = {
    "revision": 9,
    "name": "removed-test-column",
    "created": "2018-02-24T15:20:12.818Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["superheroes", "test_column"]
    },
    {
        fn: "changeColumn",
        params: [
            "superheroes",
            "secret_identity",
            {
                "type": Sequelize.STRING(20),
                "validate": {
                    "len": {
                        "args": [3, 20],
                        "msg": "Secret Identity must be between 3 and 20 characters long"
                    }
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
            "secret_identity",
            {
                "type": Sequelize.STRING(20),
                "validate": {
                    "len": {
                        "args": [3, 20],
                        "msg": "Secret Identity must be between 3 and 20 characters long"
                    }
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
            "secret_identity",
            {
                "type": Sequelize.STRING(20),
                "validate": {
                    "len": {
                        "args": [3, 20],
                        "msg": "Secret Identity must be between 3 and 20 characters long"
                    }
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
                "type": Sequelize.STRING(60),
                "validate": {
                    "len": {
                        "args": [3, 60],
                        "msg": "Name must be between 3 and 60 characters long"
                    }
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
                "type": Sequelize.STRING(60),
                "validate": {
                    "len": {
                        "args": [3, 60],
                        "msg": "Name must be between 3 and 60 characters long"
                    }
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
