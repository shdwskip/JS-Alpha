'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "superheroes", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "superhero-has-name-secretidentit-story",
    "created": "2018-02-23T13:29:03.704Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "superheroes",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "name": {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 60],
                        "msg": "Name must be between 3 and 60 characters long"
                    }
                },
                "allowNull": false
            },
            "secret_identity": {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 20],
                        "msg": "Secret Identity must be between 3 and 20 characters long"
                    }
                },
                "allowNull": false,
                "unique": true
            },
            "story": {
                "type": Sequelize.STRING,
                "validate": {
                    "notEmpty": true
                },
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "allowNull": false
            }
        },
        {}
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
