'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "story" on table "superheroes"
 *
 **/

var info = {
    "revision": 4,
    "name": "story-type-is-text",
    "created": "2018-02-23T13:41:59.010Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "superheroes",
        "story",
        {
            "type": Sequelize.TEXT,
            "validate": {
                "notEmpty": true
            },
            "allowNull": false
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
